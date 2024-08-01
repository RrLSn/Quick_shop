import styles from "../styles/Checkout_success.module.css";

const Checkout_success = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.checkout_status}>
        <span className={styles.success}>
          <img src="/svg/checkIcon.svg" alt="" />
        </span>
        <h1>Purchase Sucessful</h1>
        <p>
          Your order have been placed successfully and it will be delivered to
          you in the next 3-5 business days. Below are some items which other
          people purchase alongside your current order,
        </p>
        <span className={styles.nav_buttons}>
          <button>Continue Shopping</button>
          <button>View All Orders</button>
        </span>
      </section>
      <section className={styles.featured_items}>
        <div className={styles.header}>
          <span>
            Related <h1>Items</h1>
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
      </section>
    </div>
  );
};

export default Checkout_success;
