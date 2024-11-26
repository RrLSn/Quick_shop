import { useContext, useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const Recommeded_product = ({products, navigate}) => {
    const [recommendProduct, setRecommendProduct] = useState([])
    const {fullname, handleSelectedProduct, setCurrentSlider, itemsPerSlide, startIndex} = useContext(ProductContext)


    useEffect(() => {
        if(products && products.length > 0){
            const recommend = products.filter((product) => product.storename === "Nike")
            const sort_recommend = recommend.sort((a, b) => b.storename - a.storename)
            setRecommendProduct(sort_recommend)
        }
    },[products])

    //Slider
    const totalSlides = Math.ceil(recommendProduct.length / itemsPerSlide)

    const handleNext = () => {
        setCurrentSlider((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
    }

    const handlePrev = () => {
        setCurrentSlider((prevSlide) => prevSlide > 0 ? prevSlide - 1 : totalSlides - 1)
    }
    
    const currentItems = recommendProduct.slice(startIndex, startIndex + itemsPerSlide)

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
          currentItems.map((recommend) => {
            return (
              <div className={styles.product_card} key={recommend._id} onClick={() => {
                handleSelectedProduct(recommend._id)
                navigate(`/product_details`)
              }}>
                <img src={recommend.image[4]} alt="" />
                <span>
                  <p>
                    {fullname === false? truncateString(recommend.title) : recommend.title}
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