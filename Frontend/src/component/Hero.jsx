/* eslint-disable react/prop-types */

import { useState } from "react";
import styles from "../styles/Hero.module.css";

const Hero = ({ herodata }) => {
  const [startIndex, setStartIndex] = useState(0)
  const getRnd = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleNext = () => {
    if (herodata.length === 0) return;
    setStartIndex((prevSlide) => (prevSlide + 1) % herodata.length)
  }

  const handlePrev = () => {
    if (herodata.length === 0) return;
    setStartIndex((prevSlide) => (prevSlide - 1 + herodata.length) % herodata.length)
  }

  if (!herodata || herodata.length  === 0){
    return <div></div>
  }

  const currentHeroData = []

  for (let i = 0; i < herodata.length; i++){
    currentHeroData.push(herodata[(startIndex + i) % herodata.length])
  }

  return (
    <div className={styles.wrapper}>
      <h1>Find and buy amazing product quickly</h1>
      <main>
        <div className={styles.navigate}>
          <img 
            src="/svg/arrowLeft.svg" 
            alt=""
            onClick={handlePrev} />
          <img 
            src="/svg/arrowRight.svg" 
            alt=""
            onClick={handleNext} />
        </div>
        <div className={styles.heroSlider}>
          {currentHeroData.map((product) => {
            let rndImage = "";
            if (product.image && product.image.length > 0) {
              const rndImageIndex = getRnd(product.image.length);
              rndImage = product.image[rndImageIndex];
            }
            return (
              <div 
                className={styles.sliderCard} 
                key={product._id}>
                <img
                  src={rndImage}
                  key={product._id}
                  alt={product.title}
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
