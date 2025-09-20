/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
  const [featuredProduct, setFeaturedProduct] = useState([])
  const {fullTitle, handleSelectedProduct, startIndex, setStartIndex} = useContext(ProductContext)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(products && products.length > 0) {
      const featured = products.filter((product) => product.price < 100)
      const sortedFeatured = featured.sort((a, b) => b.price - a.price)
      setFeaturedProduct(sortedFeatured)
    }
  },[products])

  const handleNext = () => {
    if (featuredProduct.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex + 1) % featuredProduct.length)
  }

  const handlePrev = () => {
    if (featuredProduct.length === 0) return;
    setStartIndex((prevIndex) => (prevIndex - 1 + featuredProduct.length) % featuredProduct.length)
  }

  if (!featuredProduct || featuredProduct === 0) {
    return <div></div>
  }

  const productArray = []
  for (let i = 0; i < featuredProduct.length; i++) {
    productArray.push(featuredProduct[(startIndex + i) % featuredProduct.length])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          Featured <h1>Product</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" onClick={handlePrev} />
          <img src="/svg/greaterIcon.svg" alt="" onClick={handleNext} />
        </div>
      </div>
      <div className={styles.products}>
        {
          productArray.map((featured, index) => {
            return (
              <div 
                className={styles.product_card} 
                key={`${featured._id} - ${index}`}
                onClick={() => {
                handleSelectedProduct(featured._id)
                navigate(`/product_details`)
              }}>
                <img src={featured.image[4]} alt="" />
                <span>
                  <p>
                    {fullTitle === false
                      ? truncateString(featured.title) 
                      : featured.title}
                  </p>
                  <p>$ {featured.price}</p>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Products;
