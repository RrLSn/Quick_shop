/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const Top_selling = ({navigate}) => {
  const [topSells, setTopSells] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const {fullTitle, handleSelectedProduct, products} = useContext(ProductContext)

  useState(() => {
      if(products && products.length > 0) {
          const top_selling = products.filter((product) => product.price > 150)
          const sortedResult = top_selling.sort((a,b) => b.price - a.price)
          setTopSells(sortedResult)
      }
  },[products])

  
  const handleNext = () => {
    if (topSells.length === 0) return;
      setStartIndex((prevSlide) => (prevSlide + 1) % topSells.length)
  }

  const handlePrev = () => {
    if  (topSells.length === 0) return;
      setStartIndex((prevSlide) => (prevSlide - 1 + topSells.length) % topSells.length)
  }

  if (!topSells || topSells.length === 0) {
    return <div></div>
  }
  
  const currentTopSells = []
  for (let i = 0; i < topSells.length; i++){
    currentTopSells.push(topSells[(startIndex + i) % topSells.length])
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          Top <h1>Selling</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" onClick={handlePrev} />
          <img src="/svg/greaterIcon.svg" alt="" onClick={handleNext} />
        </div>
      </div>
      <div className={styles.products}>
        {
          currentTopSells.map((topsell, index) => {
            return (
              <div className={styles.product_card} key={`${topsell._id} - ${index}`} onClick={() => {
                handleSelectedProduct(topsell._id)
                navigate(`/product_details`)
              }}>
                <img src={topsell.image[4]} alt="" />
                <span>
                  <p>
                    {fullTitle === false? truncateString(topsell.title) : topsell.title}
                  </p>
                  <p>$ {topsell.price}</p>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Top_selling