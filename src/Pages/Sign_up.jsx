// import React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Sign_up.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  phone_Regex,
  pwd_Regex,
  name_Regex,
  email_Regex,
} from "../validation.js";
import axios from "../Api/axios.js";
import { regUrl } from "../Api/axios.js";

const Sign_up = () => {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [num, setNum] = useState("");
  const [validNum, setValidNum] = useState(false);
  const [numFocus, setNumFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState(null);
  const [sucess, setSucess] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [pwdValue, setPwdValue] = useState("password");

  const userRef = useRef(null);
  const errRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const pwd_Res = pwd_Regex.test(password);
    const phone_Res = phone_Regex.test(num);
    const email_Res = email_Regex.test(email);
    const name_Res = name_Regex.test(name);
    setValidPassword(pwd_Res);
    setValidNum(phone_Res);
    setValidEmail(email_Res);
    setValidName(name_Res);
    setErrMsg("");
  }, [password, num, name, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = name_Regex.test(name);
    const v2 = pwd_Regex.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const res = await axios.post(
        regUrl,
        JSON.stringify({
          fullname: name,
          email: email,
          phone: num,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res.data);
      console.log(res.accessToken);
      console.log(JSON.stringify(res));
      setSucess(true);

      //clear input fields

      //Navigate
      navigate("/auth/sucess");
    } catch (error) {
      setErrMsg(error.response?.data.message || "An error occurred");
      errRef.current.focus();
    }
  };

  const handlepwdValueClick = () => {
    setPwdVisible(!pwdVisible);
  };

  return (
    // <div></div>
    <div className={styles.wrapper}>
      <div className={styles.signup_info}>
        <img src="/svg/Logo.svg" alt="" />
        <div className={styles.signup_header}>
          <h1>Create Account</h1>
          <p>Sign Up using any of these method to explore our collection.</p>
          <div className={styles.signup_socials}>
            <button>
              <img src="/svg/google.svg" alt="" />
              Google
            </button>
            <button>
              <img src="/svg/facebook_1.svg" alt="" />
              Facebook
            </button>
          </div>
        </div>
        <div className={styles.form_area}>
          <div className={styles.form_header}>
            <span className={styles.line}></span>
            <p>Or continue with email</p>
            <span className={styles.line}></span>
          </div>
          <p
            ref={errRef}
            className={errMsg ? styles.errMsg : "hidden"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form
            action=""
            id=""
            name=""
            className={styles.signup_details}
            onSubmit={handleSubmit}
          >
            <div className={styles.form_input}>
              <img src="/svg/contactIcon.svg" alt="" />
              <input
                type="text"
                placeholder="Full name"
                id="name"
                ref={userRef}
                autoComplete="off"
                required
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                onChange={(e) => setName(e.target.value)}
                // aria-describedby="uidnote"
                aria-invalid={validName ? "false" : "true"}
              />
            </div>
            <div className={styles.form_input}>
              <img src="/svg/mailIcon.svg" alt="" />
              <input
                type="text"
                placeholder="Email Address"
                id="email"
                ref={userRef}
                autoComplete="off"
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                onChange={(e) => setEmail(e.target.value)}
                // aria-describedby="uidnote"
                aria-invalid={validEmail ? "false" : "true"}
              />
            </div>
            <div className={styles.form_input}>
              <img src="/svg/phoneIcon.svg" alt="" />
              <input
                type="text"
                placeholder="Phone Number"
                id="phone"
                ref={userRef}
                autoComplete="off"
                required
                onFocus={() => setNumFocus(true)}
                onBlur={() => setNumFocus(false)}
                onChange={(e) => setNum(e.target.value)}
                // aria-describedby="uidnote"
                aria-invalid={validNum ? "false" : "true"}
              />
            </div>
            <div className={styles.form_input}>
              <img src="/svg/lock.svg" alt="" />
              <input
                type={pwdVisible ? "text" : "password"}
                placeholder="Password"
                id="password"
                ref={userRef}
                autoComplete="off"
                required
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                onChange={(e) => setPassword(e.target.value)}
                // aria-describedby="uidnote"
                aria-invalid={validPassword ? "false" : "true"}
              />
              <div className={styles.pwdVisible} onClick={handlepwdValueClick}>
                {!pwdVisible ? (
                  <img src="/svg/pass_hide.svg" alt="" />
                ) : (
                  <img src="/svg/pass_show.svg" alt="" />
                )}
              </div>
            </div>
            <button
              disabled={
                !validEmail || !validName || !validNum || !validPassword
                  ? true
                  : false
              }
              className={
                validEmail || validName || validNum || validPassword
                  ? "button"
                  : "bg-[#c6c1c1]"
              }
            >
              Sign Up
            </button>
            <footer>
              <h1>Already have an account?</h1>
              <p>
                <Link to="/auth/login">Login</Link>
              </p>
            </footer>
          </form>
        </div>
      </div>
      <div className={styles.carve}>
        <img src="/svg/reg.svg" alt="" />
      </div>
    </div>
  );
};

export default Sign_up;
