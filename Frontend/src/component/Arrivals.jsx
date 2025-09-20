/* eslint-disable react/prop-types */

import { useContext } from "react";
import styles from "../styles/Arrivals.module.css";
import { truncateString } from "../utils";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Arrivals = ({ newArrivals }) => {
  const {fullTitle, handleSelectedProduct, startIndex, setStartIndex} = useContext(ProductContext)
  const navigate = useNavigate()

  const getRnd = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleNext = () => {
    if (newArrivals.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex + 1) % newArrivals.length)
  }

  const handlePrev = () => {
    if (newArrivals.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex - 1 + newArrivals.length) % newArrivals.length)
  }

  if (!newArrivals || newArrivals.length === 0) {
    return <div></div>
  }

  const currentArrivals = []
  for (let i = 0; i < newArrivals.length; i++) {
    currentArrivals.push(newArrivals[(startIndex + i) % newArrivals.length])
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          New <h1>Arrivals</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" onClick={handlePrev} />
          <img src="/svg/greaterIcon.svg" alt="" onClick={handleNext} />
        </div>
      </div>
      <div className={styles.products}>
        {currentArrivals.map((product, index) => {
          let rndImage = "";
          if (product.image && product.image.length > 0) {
            const rndImageIndex = getRnd(product.image.length);
            rndImage = product.image[rndImageIndex];
          }
          return (
            <div 
              className={styles.products_card} 
              key={`${product._id} - ${index}`}
              onClick={() => {
                handleSelectedProduct(product._id)
                navigate(`/product_details`)
              }}>
              <img src={rndImage} alt="products" />
              <span>
                <p>
                  {fullTitle === false
                    ? truncateString(product.title)
                    : product.title}
                </p>
                <p>${product.price}</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Arrivals;
