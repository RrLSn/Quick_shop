// import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Contact_page.module.css";
import Google_map from "../component/Google_map";

const Contact_page = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.page_title}>
        <h1>Contact</h1>
        <span>
          <p>
            <Link to="/">Home</Link>
          </p>
          /
          <p>
            <Link to="/contact_us">Contact</Link>
          </p>
        </span>
      </span>
      <section className={styles.contact}>
        <div className={styles.contact_info}>
          <div className={styles.contact_details}>
            <span>
              <h1>Email</h1>
              <p>info@quickshop.com</p>
            </span>
            <span>
              <h1>Phone Number</h1>
              <p>+234 012 345 6789</p>
            </span>
            <span>
              <h1>Adress</h1>
              <p>1b Lekki Phase 1 Lagos, Nigeria</p>
            </span>
          </div>
          <span className={styles.map}>
            <Google_map />
          </span>
        </div>
        <div className={styles.input_info}>
          <h1>Message Us</h1>
          <form action="" id="submit" name="submit">
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input1}
            />
            <span>
              <input
                type="text"
                placeholder="Email"
                className={styles.input2}
              />
              <input
                type="text"
                placeholder="Phone"
                className={styles.input2}
              />
            </span>
            <input
              type="text"
              placeholder="Subject"
              className={styles.input1}
            />
            <textarea name="" id="" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact_page;
