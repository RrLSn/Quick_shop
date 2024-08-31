import styles from "../styles/Dashboard_page.module.css";

const Dashboard_page = () => {
  return (
    <section className={styles.container}>
      <div className={styles.welcome}>
        <span className={styles.welc_note}>
          <h1>Welcome To Your Dashboard John Doe!</h1>
          <p>Manage your profile, order history and account setting.</p>
        </span>
        <span className={styles.order_placed}>
          <img src="/svg/order_block.svg" alt="" />
          <div>
            <h1>02</h1>
            <p>Orders Placed</p>
          </div>
        </span>
      </div>

      <div className={styles.order}>
        <span className={styles.prev_order}></span>
        <span className={styles.recnt_order}></span>
      </div>
      <div className={styles.profile}></div>
    </section>
  );
};

export default Dashboard_page;
