import styles from "../styles/Dashboard_page.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard_page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await axios.get("/http://localhost:8080/api/auth/user");
      } catch (error) {}
    };
  }, []);
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
