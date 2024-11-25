import { useContext, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const Top_selling = ({products, handleSelectedProduct, navigate}) => {
    const [topSells, setTopSells] = useState([])
    const {fullname} = useContext(ProductContext)
    const [currentSlider, setCurrentSlider] = useState(0)

    useState(() => {
        if(products && products.length > 0) {
            const top_selling = products.filter((product) => product.price > 150)
            const sortedResult = top_selling.sort((a,b) => b.price - a.price)
            
            setTopSells(sortedResult)
        }
    },[products])

        //Slider
        const itemsPerSlide = 3;
        const totalSlides = Math.ceil(topSells.length / itemsPerSlide)
        const startIndex = currentSlider * itemsPerSlide
    
        const handleNext = () => {
            setCurrentSlider((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
        }
    
        const handlePrev = () => {
            setCurrentSlider((prevSlide) => prevSlide > 0 ? prevSlide - 1 : totalSlides - 1)
        }
        
        const currentItems = topSells.slice(startIndex, startIndex + itemsPerSlide)

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
          currentItems.map((topsell) => {
            return (
              <div className={styles.product_card} key={topsell._id} onClick={() => {
                handleSelectedProduct(topsell._id)
                navigate(`/product_details`)
              }}>
                <img src={topsell.image[4]} alt="" />
                <span>
                  <p>
                    {fullname === false? truncateString(topsell.title) : topsell.title}
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