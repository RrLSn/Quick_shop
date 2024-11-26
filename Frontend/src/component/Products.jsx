import { useContext, useEffect, useState } from "react";
import styles from "../styles/Products.module.css";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const Products = ({ products }) => {
  const [featuredProduct, setFeaturedProduct] = useState([])
  const {fullname} = useContext(ProductContext)
  
  useEffect(() => {
    if(products && products.length > 0) {
      const featured = products.filter((product) => product.price < 100)
      const sortedFeatured = featured.sort((a, b) => b.price - a.price)
      setFeaturedProduct(sortedFeatured)
    }
  },[products])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          Featured <h1>Product</h1>
        </span>
        <div className={styles.navigate}>
          <img src="/svg/lessIcon.svg" alt="" />
          <img src="/svg/greaterIcon.svg" alt="" />
        </div>
      </div>
      <div className={styles.products}>
        {
          featuredProduct.map((featured) => {
            return (
              <div className={styles.product_card} key={featured._id}>
                <img src={featured.image[4]} alt="" />
                <span>
                  <p>
                    {fullname === false? truncateString(featured.title) : featured.title}
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
