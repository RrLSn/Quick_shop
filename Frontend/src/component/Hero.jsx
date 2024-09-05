// import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = ({ herodata }) => {
  const getRnd = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Find and buy amazing product quickly</h1>
      <main>
        <div className={styles.navigate}>
          <img src="/svg/arrowLeft.svg" alt="" />
          <img src="/svg/arrowRight.svg" alt="" />
        </div>
        <div className={styles.heroSlider}>
          {herodata.map((product) => {
            let rndImage = "";
            if (product.image && product.image.length > 0) {
              const rndImageIndex = getRnd(product.image.length);
              rndImage = product.image[rndImageIndex];
            }
            return (
              <div className={styles.sliderCard} key={product._id}>
                <img
                  src={rndImage}
                  // className={styles.sliderCard}
                  key={product._id}
                  alt="Image"
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Hero;
