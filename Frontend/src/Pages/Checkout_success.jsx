import Related_product from "../component/Related_product";
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
      <Related_product />
    </div>
  );
};

export default Checkout_success;
