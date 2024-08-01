// import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Forget_pass.module.css";

const Forget_pass = () => {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <img src="/svg/Logo.svg" alt="" />

        <div className={styles.rem_login}>
          <h1>Forgot Password</h1>
          <span>
            <p>Remeber your password?</p>
            <p>
              <Link to="/auth/login">Login here</Link>
            </p>
          </span>
        </div>
        <div className={styles.form_fill}>
          <div className={styles.input_mail}>
            <span>
              <img src="/svg/mailIcon.svg" alt="" />
              <input type="text" />
            </span>
            <p>Password reset link will be sent to your email.</p>
          </div>
          <button>
            <Link to="/auth/reset_password">Submit</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forget_pass;
