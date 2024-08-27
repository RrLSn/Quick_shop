// import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Sign_up.module.css";
import { Link } from "react-router-dom";

const Sign_up = () => {
  const [registeredUser, setRegisterUser] = useState({});

  const registerAuthUrl = "http://localhost:8080/api/auths/register";
  const handleRegister = async () => {};

  return (
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
          <form action="" className={styles.signup_details}>
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
