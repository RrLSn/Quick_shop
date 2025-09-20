/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";
import { useNavigate } from "react-router-dom";
import { productApiUrl } from "../Api/axios";
import axios from "axios";

const Related_product = ({selectedProduct}) => {
  const {fullTitle, handleSelectedProduct, startIndex, setStartIndex} = useContext(ProductContext)
  const [relatedProduct, setRelatedProduct] = useState([])
  const navigate = useNavigate()

  //fetch related products for selected product
  useEffect(() => {
    const fetchRelatedProducts = async(id) => {
      const res = await axios.get(`${productApiUrl}/${id}`)
      setRelatedProduct(res.data)
    }
    fetchRelatedProducts(selectedProduct)
  },[selectedProduct])

  const handleNext = () => {
    if (relatedProduct.length === 0) return;
      setStartIndex((prevSlide) => (prevSlide + 1) % relatedProduct.length)
  }

  const handlePrev = () => {
    if (relatedProduct.length === 0) return;
      setStartIndex((prevSlide) => (prevSlide - 1 + relatedProduct.length) % relatedProduct.length)
  }
  
  const currentItems = []
   for (let i = 0; i < relatedProduct.length; i++){
    currentItems.push(relatedProduct[(startIndex + i) % relatedProduct.length])
   }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          Related <h1>Product</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" onClick={handlePrev} />
          <img src="/svg/greaterIcon.svg" alt="" onClick={handleNext} />
        </div>
      </div>
      <div className={styles.products}>
      <div className={styles.products}>
        {
          currentItems?.map((related) => {
            return (
              <div className={styles.product_card} key={related._id} onClick={() => {
                handleSelectedProduct(related._id)
                navigate(`/product_details`)
              }}>
                <img src={related.image[4]} alt="" />
                <span>
                  <p>
                    {fullTitle === false? truncateString(related.title) : related.title}
                  </p>
                  <p>$ {related.price}</p>
                </span>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Related_product