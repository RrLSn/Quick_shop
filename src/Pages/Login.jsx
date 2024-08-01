// import React from 'react'
import { Link } from "react-router-dom";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login_info}>
        <img src="/svg/Logo.svg" alt="" />
        <div className={styles.login_header}>
          <h1>Welcome Back!</h1>
          <p>
            Log In to your account using any of these method to explore more
            collection.
          </p>
          <div className={styles.login_socials}>
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
          <form action="" className={styles.login_details}>
            <div className={styles.form_fill}>
              <div className={styles.form_input}>
                <img src="/svg/mailIcon.svg" alt="" />
                <input type="text" placeholder="Email Address" />
              </div>
              <div className={styles.form_input}>
                <img src="/svg/lock.svg" alt="" />
                <input type="password" placeholder="Password" />
                <img src="/svg/pass_hide.svg" alt="" />
              </div>
              <span className={styles.rem_pass}>
                <div>
                  <input type="checkbox" name="" id="" />
                  <p>Remember me</p>
                </div>
                <p>
                  <Link to="/auth/forgetPassword">Forgot Password?</Link>
                </p>
              </span>
            </div>
            <button>Login</button>
            <footer>
              <h1>Don&rsquo;t have an account?</h1>
              <p>
                <Link to="/auth/sign_up">Sign Up</Link>
              </p>
            </footer>
          </form>
        </div>
      </div>
      <div className={styles.carve}></div>
    </div>
  );
};

export default Login;
