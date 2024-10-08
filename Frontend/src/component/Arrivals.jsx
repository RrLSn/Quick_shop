// import React from "react";
import { useState } from "react";
import styles from "../styles/Arrivals.module.css";
import { truncateString } from "../utils";

const Arrivals = ({ newArrivals }) => {
  const [fullname, setFullname] = useState(false);
  const getRnd = (max) => {
    return Math.floor(Math.random() * max);
  };
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
        {newArrivals.map((product) => {
          let rndImage = "";
          if (product.image && product.image.length > 0) {
            const rndImageIndex = getRnd(product.image.length);
            rndImage = product.image[rndImageIndex];
          }
          return (
            <div className={styles.products_card} key={product._id}>
              <img src={rndImage} alt="products" />
              <span>
                <p>
                  {fullname === false
                    ? truncateString(product.title)
                    : product.title}
                </p>
                <p>${product.price}</p>
              </span>
            </div>
          );
        })}
        {/* <div className={styles.products_card}>
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
        </div> */}
      </div>
    </div>
  );
};

export default Arrivals;
