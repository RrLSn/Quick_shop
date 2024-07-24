// import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Find and buy amazing product quickly</h1>
      <main>
        <div className={styles.navigate}>
          <img src="/svg/arrowLeft.svg" alt="" />
          <img src="/svg/arrowRight.svg" alt="" />
        </div>
        <div className={styles.heroSlider}>
          <span className={styles.sliderCard}></span>
          <span className={styles.sliderCard}></span>
          <span className={styles.sliderCard}></span>
          <span className={styles.sliderCard}></span>
          <span className={styles.sliderCard}></span>
        </div>
      </main>
    </div>
  );
};

export default Hero;
