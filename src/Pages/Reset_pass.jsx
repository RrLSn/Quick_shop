// import React from "react";
import styles from "../styles/Reset_pass.module.css";

const Reset_pass = () => {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <img src="/svg/Logo.svg" alt="" />
        <div className={styles.reset_header}>
          <h1>Reset Password</h1>
          <p>Enter your new password here</p>
        </div>
        <div className={styles.reset_form}>
          <span>
            <img src="/svg/lock.svg" alt="" />
            <input type="password" placeholder="Password" />
            <img src="/svg/pass_hide.svg" alt="" />
          </span>
          <span>
            <img src="/svg/lock.svg" alt="" />
            <input type="password" placeholder="Comfirm Password" />
            <img src="/svg/pass_hide.svg" alt="" />
          </span>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Reset_pass;
