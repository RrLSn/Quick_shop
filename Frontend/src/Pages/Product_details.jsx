import styles from "../styles/Product_details.module.css";

const Product_details = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigate_header}>
        <p>Home</p>/<p>Shop</p>/<p>Product Title</p>
      </div>
      <section className={styles.product_details}>
        <div className={styles.product_slides}>
          <div className={styles.product_thumbnail}>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
        <div className={styles.product_info}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className={styles.product_review}></section>
    </div>
  );
};

export default Product_details;
