/* eslint-disable react/prop-types */

import { useRef } from "react";
import styles from "../styles/Hero.module.css";

const Hero = ({ herodata }) => {
  const getRnd = (max) => {
    return Math.floor(Math.random() * max);
  };
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if(scrollRef.current){
      const {clientWidth} = scrollRef.current
      scrollRef.current.scrolBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>Find and buy amazing product quickly</h1>
      <main>
        <div className={styles.navigate}>
          <img 
            src="/svg/arrowLeft.svg" 
            alt=""
            onClick={() => scroll("left")} />
          <img 
            src="/svg/arrowRight.svg" 
            alt=""
            onClick={() => scroll("right")} />
        </div>
        <div className={styles.heroSlider}>
          {herodata.map((product) => {
            let rndImage = "";
            if (product.image && product.image.length > 0) {
              const rndImageIndex = getRnd(product.image.length);
              rndImage = product.image[rndImageIndex];
            }
            return (
              <div 
                className={styles.sliderCard} 
                key={product._id}
                ref={scrollRef}>
                <img
                  src={rndImage}
                  // className={styles.sliderCard}
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
