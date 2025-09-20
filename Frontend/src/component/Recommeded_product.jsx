/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const Recommeded_product = ({products, navigate}) => {
    const [recommendProduct, setRecommendProduct] = useState([])
    const {fullTitle, handleSelectedProduct, itemsPerSlide, startIndex, setStartIndex} = useContext(ProductContext)


    useEffect(() => {
        if(products && products.length > 0){
            const recommend = products.filter((product) => product.storename === "Nike")
            setRecommendProduct(recommend)
        }
    },[products])

    const handleNext = () => {
      if (recommendProduct.length === 0) return;
        setStartIndex((prevSlide) => (prevSlide + 1) % recommendProduct.length)
    }

    const handlePrev = () => {
      if (recommendProduct.length === 0) return;
        setStartIndex((prevSlide) => (prevSlide - 1 + recommendProduct.length) % recommendProduct.length)
    }

    if(!recommendProduct || recommendProduct.length === 0){
      return <div></div>
    }

    
    const currentRecProducts = []
    for (let i = 0; i < itemsPerSlide; i++) {
      currentRecProducts.push(recommendProduct[(startIndex + i) % recommendProduct.length])
    }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          Recommended <h1>Product</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" onClick={handlePrev} />
          <img src="/svg/greaterIcon.svg" alt="" onClick={handleNext} />
        </div>
      </div>
      <div className={styles.products}>
        {
          currentRecProducts.map((recommend, index) => {
            return (
              <div 
                className={styles.product_card} 
                key={`${recommend._id} - ${index}`}    
                onClick={() => {
                handleSelectedProduct(recommend._id)
                navigate(`/product_details`)
              }}>
                <img src={recommend.image[4]} alt="" />
                <span>
                  <p>
                    {fullTitle === false
                      ? truncateString(recommend.title) 
                      : recommend.title}
                  </p>
                  <p>$ {recommend.price}</p>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommeded_product