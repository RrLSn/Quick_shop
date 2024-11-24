import { useContext, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const Top_selling = ({products}) => {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          Top <h1>Selling</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" />
          <img src="/svg/greaterIcon.svg" alt="" />
        </div>
      </div>
      <div className={styles.products}>
        {
          topSells.map((topsell) => {
            return (
              <div className={styles.product_card} key={topsell._id}>
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