// import React from 'react'
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footer_contents}>
        <div className={styles.content_a}>
          <div className={styles.logo}>
            <img src="/svg/Logo.svg" alt="" />
            <p>The quickest way to shop online</p>
            <span className={styles.socials}>
              <img src="/svg/instagram.svg" alt="" />
              <img src="/svg/facebook.svg" alt="" />
              <img src="/svg/twitter.svg" alt="" />
              <img src="/svg/youtube.svg" alt="" />
            </span>
          </div>
        </div>
        <div className={styles.content_b}>
          <h1>Shop</h1>
          <div className={styles.filters}>
            <p>All Collections</p>
            <p>Female Fashion</p>
            <p>Male Fashion</p>
          </div>
        </div>
        <div className={styles.content_c}>
          <h1>Company</h1>
          <div className={styles.company_navi}>
            <p>
              <Link to="/about_us">About Quick Shop</Link>
            </p>
            <p>Carrers</p>
            <p>
              <Link to="/contact_us">Contact Us</Link>
            </p>
            <p>Become an affiliate</p>
          </div>
        </div>
        <div className={styles.content_d}>
          <h1>Information</h1>
          <div className={styles.information}>
            <p>
              <Link to="/privacy">Privary Policy</Link>
            </p>
            <p>
              <Link to="/terms">Terms and Condition</Link>
            </p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className={styles.content_e}>
          <h1>Payment Methods</h1>
          <span className={styles.payment}>
            <img src="/svg/mastercard.svg" alt="" />
            <img src="/svg/visa.svg" alt="" />
            <img src="/svg/paypal.svg" alt="" />
          </span>
        </div>
      </div>
      <p>Copyrights. All rights reserved</p>
    </footer>
  );
};

export default Footer;
