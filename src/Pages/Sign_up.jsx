// import React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Sign_up.module.css";
import { Link } from "react-router-dom";
import { phone_Regex, pwd_Regex } from "../validation.js";

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

  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSucess] = useState(false);

  const userRef = useRef(null);
  const errRef = useRef();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const pwd_Res = pwd_Regex.test(password);
    const phone_Res = phone_Regex.test(num);
    console.log(password);
    console.log(phone_Res);
    console.log(pwd_Res);
    console.log(num);
    setValidPassword(pwd_Res);
    setValidNum(phone_Res);
    setErrMsg("");
  }, [password, num]);

  const handleRegister = async () => {};

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
          <form action="" id="" name="" className={styles.signup_details}>
            <div className={styles.form_input}>
              <img src="/svg/contactIcon.svg" alt="" />
              <input type="text" placeholder="Full name" />
            </div>
            <div className={styles.form_input}>
              <img src="/svg/mailIcon.svg" alt="" />
              <input type="text" placeholder="Email Address" />
            </div>
            <div className={styles.form_input}>
              <img src="/svg/phoneIcon.svg" alt="" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className={styles.form_input}>
              <img src="/svg/lock.svg" alt="" />
              <input type="password" placeholder="Password" />
              <img src="/svg/pass_hide.svg" alt="" />
            </div>
            <button>Sign Up</button>
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
