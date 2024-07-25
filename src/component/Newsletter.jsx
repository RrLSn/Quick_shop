// import React from "react";
import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subscribe}>
        <span>
          Subscribe to our <strong>Newsletter</strong> to get updates on our
          latest arrivals.
        </span>
        <p>Get 20% off on your first order just by subscribing.</p>
      </div>
      <div className={styles.sub_mail}>
        <span>
          <img src="/svg/mailIcon.svg" alt="" />
          <input type="text" placeholder="Enter your email address" />
        </span>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
