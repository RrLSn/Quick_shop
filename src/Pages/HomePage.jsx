import Arrivals from "../component/Arrivals";
import Category from "../component/Category";
import Hero from "../component/Hero";
import Newsletter from "../component/Newsletter";
import Offers from "../component/Offers";
import Products from "../component/Products";
import styles from "../styles/HomePage.module.css";
// import axios from "axios";
// import { useEffect } from "react";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Category />
      <Products />
      <Offers />
      <Arrivals />
      <Newsletter />
    </div>
  );
};

export default HomePage;
