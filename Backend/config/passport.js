import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import Users from "../modules/users_modules.js";
import jwt from "jsonwebtoken";

// Define the Google strategy configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //Check if user already exist in the database
        let user = await Users.findOne({ googleId: profile.id });

        //If user does not exist, create user
        if (!user) {
          user = await Users.create({
            googleId: profile.id,
            fullname: profile.displayName,
            email: profile.emails[0].value,
          });
        }

        //Generate a JWT token for the authenticated user
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
          expiresIn: "1d",
        });
        //return the user through done callback
        done(null, { user, token });
      } catch (error) {
        done(error, null);
      }
    }
  )
);

export default passport;
