import { useContext, useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";
import { useNavigate } from "react-router-dom";
import { productApiUrl } from "../Api/axios";
import axios from "axios";

const Related_product = ({selectedProduct}) => {
  const {fullname, handleSelectedProduct} = useContext(ProductContext)
  const [currentSlider, setCurrentSlider] = useState(0)
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

  //Slider
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(relatedProduct.length / itemsPerSlide)
  const startIndex = currentSlider * itemsPerSlide

  const handleNext = () => {
      setCurrentSlider((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)
  }

  const handlePrev = () => {
      setCurrentSlider((prevSlide) => prevSlide > 0 ? prevSlide - 1 : totalSlides - 1)
  }
  
  const currentItems = relatedProduct.slice(startIndex, startIndex + itemsPerSlide)

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
                    {fullname === false? truncateString(related.title) : related.title}
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