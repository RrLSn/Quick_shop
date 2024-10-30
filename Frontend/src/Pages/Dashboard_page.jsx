import styles from "../styles/Dashboard_page.module.css";
import { Link } from "react-router-dom";

const Dashboard_page = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))

  return (
    <main className={styles.container}>
      <div className={styles.welcome}>
        <span className={styles.welc_note}>
          <h1>Welcome To Your Dashboard {userData?.fullname}!</h1>
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

      <section className={styles.order}>
        <span className={styles.prev_order}>
          <div>
            <img src="/svg/order_block2.svg" alt="" />
            <p>
              <Link to="/dashboard/order_history">View all</Link>
            </p>
          </div>
          <div className={styles.order_details}>
            <div>
              <h1>Orders</h1>
              <p>Manage and view all your orders</p>
            </div>
            <div className={styles.order_info}>
              <span>02 Delivered</span>
              <span>01 Pending</span>
            </div>
          </div>
        </span>
        <span className={styles.recnt_order}>
          <div>
            <h1>Recent Order (s)</h1>
            <p>Order tracking timeline</p>
          </div>
          <div></div>
        </span>
      </section>
      <section className={styles.profile}>
        <div className={styles.profile_edit}>
          <div>
            <img src="/svg/UserIcon.svg" alt="" />
            <p>
              <Link to="/dashboard/profile">Edit</Link>
            </p>
          </div>
          <div className={styles.profile_intro}>
            <h1>Profile</h1>
            <p>Manage and view your profile</p>
          </div>
        </div>
        <div className={styles.settings_edit}>
          <div>
            <img src="/svg/settingsIcon.svg" alt="" />
            <p>
              <Link to="/dashboard/settings">Manage</Link>
            </p>
          </div>
          <div className={styles.settings_intro}>
            <h1>Settings</h1>
            <p>Update your password and set up your delivery locations</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard_page;
