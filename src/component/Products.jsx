import styles from "../styles/Products.module.css";

const Products = ({ products }) => {
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
        <div className={styles.product_card}>
          <img src="" alt="" />
          <span>
            <p>Produts tittle</p>
            <p>Price</p>
          </span>
        </div>
        <div className={styles.product_card}>
          <img src="" alt="" />
          <span>
            <p>Produts tittle</p>
            <p>Price</p>
          </span>
        </div>
        <div className={styles.product_card}>
          <img src="" alt="" />
          <span>
            <p>Produts tittle</p>
            <p>Price</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
