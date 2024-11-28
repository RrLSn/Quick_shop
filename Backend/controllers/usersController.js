import Users from "../modules/users_modules.js";
import {
  registerValidation,
  updateUserValidation,
  passwordValidation,
} from "../validation/validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//Create a user
export const registerUser = async (req, res) => {
  // validate user before creating
  const { error, value } = registerValidation(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Invalidated Details",
      details: error.details[0].message,
    });
  }

  //Checking if user email or phone is already on database
  const emailExist = await Users.findOne({ email: req.body.email });
  const phoneExist = await Users.findOne({ phone: req.body.phone });
  if (emailExist) {
    return res.status(400).json({ message: "Email already exist" });
  } else if (phoneExist) {
    return res.status(400).json({ message: "phone already exist" });
  }

  //Hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new User
  const User = new Users({
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
    country: req.body.country,
    state: req.body.state,
    address: req.body.address,
  });

  try {
    const user = await User.save(value);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Login a user
export const loginUser = async (req, res) => {
  //checking if email exist
  const user = await Users.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });

  //checking if password is correct
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid email or password" });

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "Logged in Sucessfully!",
    token,
    fullname: user.fullname,
    phone: user.phone,
    email: user.email,
    userId: user._id,
  });
};

//SignOut User
export const sign_Out = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error destroying session" });
    }

    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    return res.status(200).json({ message: "Logged out successfuly!" });
  });
};

//Forget User password and generate OTP
export const forget_password = async (req, res) => {
  const { email } = req.body;

  try {
    //checking if email exist
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //Generate a 6-digits OTP
    const OTP = Math.floor(1000 + Math.random() * 9000);

    //Create a JWT toke for OTP with 5min expiration
    const otpToken = jwt.sign({ OTP }, process.env.TOKEN_SECRET, {
      expiresIn: "5m",
    });

    //Save OTP in user record
    user.otpToken = otpToken;
    await user.save();

    //Sending verification code with Nodemailer
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.STORE_EMAIL,
        pass: process.env.STORE_PASS,
      },
    });

    var mailOptions = {
      from: process.env.STORE_EMAIL,
      to: `${email}`,
      subject: "QUICK SHOP PASSWORD RECOVERY...",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Quick Shop - OTP EMAIL</title>
  </head>
  <body>
    <div>
    <p>PASSWORD RECOVERY VERIFICATION CODE: 
    <br/>
    <h1>${OTP}</h1>
    </p>
    </div>
  </body>
</html>
`,
    };

    //Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: `Error sending mail to ${email}` });
      } else {
        res.status(200).json({
          message: `We sent you a mail to ${email} with your verification code`,
          otpToken,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Generate and resend a new OTP
export const resendOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //Genrate new OTP and replace the old one
    const newOTP = Math.floor(1000 + Math.random() * 9000);
    const newOtpToken = jwt.sign({ OTP: newOTP }, process.env.TOKEN_SECRET, {
      expiresIn: "5m",
    });

    //Overwrite the old OTP n the user's record
    user.otpToken = newOtpToken;

    //Save the user
    await user.save();

    //Sending verification code with Nodemailer
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.STORE_EMAIL,
        pass: process.env.STORE_PASS,
      },
    });

    var mailOptions = {
      from: process.env.STORE_EMAIL,
      to: `${email}`,
      subject: "QUICK SHOP PASSWORD RECOVERY...",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Quick Shop - OTP EMAIL</title>
  </head>
  <body>
    <div>
    <p>PASSWORD RECOVERY VERIFICATION CODE: 
    <br/>
    <h1>${newOTP}</h1>
    </p>
    </div>
  </body>
</html>
`,
    };

    //Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: `Error sending mail to ${email}` });
      } else {
        res.status(200).json({
          message: `New OTP sent!`,
          otpToken: newOtpToken,
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: `Error resending OTP` });
  }
};

//Verified the latest generated OTP
export const verifyOTP = async (req, res) => {
  const { OTP, otpToken, email } = req.body;

  try {
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //Verify the latest OTP token
    const decode = jwt.verify(otpToken, process.env.TOKEN_SECRET);

    if (decode.OTP === OTP) {
      //OTP is valid, genrate a reset token
      const resetToken = jwt.sign(
        { email: user.email },
        process.env.TOKEN_SECRET,
        { expiresIn: "10m" }
      );
      return res
        .status(200)
        .json({ resetToken, message: "OTP verified Successfully!" });
    } else {
      return res.status(400).json({ message: "Invalid OTP!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "OTP has expired or invalid" });
  }
};

//Check if user is Authenticated/Authorized
export const isAuthenticated = async (req, res, next) => {
  //Check for token in cookies or authorization user
  const token =
    req.cookies.auth_token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated" });
  }

  try {
    //verify the token and decode the user ID
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = await Users.findById(decode._id);
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};

//Reset user password
export const resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  //validate user details
  const { error } = passwordValidation({ newPassword });
  if (error)
    return res.status(400).json({
      message: "invalidated password",
      details: error.details[0].message,
    });

  try {
    const decode = jwt.verify(resetToken, process.env.TOKEN_SECRET);
    if (!decode || !decode.email) {
      return res.status(404).json({ message: "Invalid token" });
    }
    const user = await Users.findOne({ email: decode.email });
    if (!user) return res.status(400).json({ message: "User not found" });

    //Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res
      .status(200)
      .json({ message: "Password reset successfully, proceed to login" });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    return res.status(400).json({ message: "Invalid request" });
  }
};

//Update user password
export const updatePasssword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  //validate user details
  const { error } = passwordValidation({ newPassword });
  if (error)
    return res.status(400).json({
      message: "invalidated password",
      details: error.details[0].message,
    });

  try {
    const user = await Users.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if password matches
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Current Password incorrect" });

    //Hash password and update new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "An error occures while updating password" });
  }
};

//update user information
export const updateUserInfo = async (req, res) => {
  const { fullname, email, phone } = req.body;

  //Create an object to hold the fields that need to be updated
  const updatedFields = {};

  //only add fields that are present in the request body
  if (fullname) updatedFields.fullname = fullname;
  if (email) updatedFields.email = email;
  if (phone) updatedFields.phone = phone;

  //validate user details
  const { error } = updateUserValidation(updatedFields);
  if (error)
    return res.status(400).json({
      message: "invalidated Details",
      details: error.details[0].message,
    });

  try {
    //Find and update the user document in database
    const user = await Users.findByIdAndUpdate(req.user._id, updatedFields, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(401).json({ message: "user not found" });

    return res
      .status(200)
      .json({ message: "Information updated successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Error updating information`, error: error.message });
  }
};

export const userDeliveryInfo = async (req, res) => {
  const { country, state, address } = req.body;
  //Create an object field to hold the fields that need to be updated
  const updatedFields = {};

  //Only add fields that are present in the request body
  if (country) updatedFields.country = country;
  if (state) updatedFields.state = state;
  if (address) updatedFields.address = address;
  try {
    const user = await Users.findOneAndUpdate(
      req.user._id,
      { $set: updatedFields },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.status(200).json({
      message: "Delivery information updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: `Error updating delivery information`,
      error: error.message,
    });
  }
};

// export const googleUserAuth = (req, res) => {
//   try {
//     const { user, token } = req.user;
//     res.status(200).json({ user, token });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Authentication eror", error: error.message });
//   }
// };
