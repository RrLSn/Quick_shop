// import React from "react";
import styles from "../styles/Category.module.css";

const Category = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.femaleCate}>
        <div className={styles.f_image}></div>
        <div className={styles.f_desc}></div>
      </div>
      <div className={styles.maleCate}>
        <div className={styles.f_desc}></div>
        <div className={styles.f_image}></div>
      </div>
    </div>
  );
};

export default Category;
