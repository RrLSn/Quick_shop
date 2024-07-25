// import React from "react";
import styles from "../styles/Arrivals.module.css";

const Arrivals = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          New <h1>Arrivals</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" />
          <img src="/svg/greaterIcon.svg" alt="" />
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.products_card}>
          <img src="" alt="" />
          <span>
            <p>Product title</p>
            <p>title</p>
          </span>
        </div>
        <div className={styles.products_card}>
          <img src="" alt="" />
          <span>
            <p>Product title</p>
            <p>title</p>
          </span>
        </div>
        <div className={styles.products_card}>
          <img src="" alt="" />
          <span>
            <p>Product title</p>
            <p>title</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
