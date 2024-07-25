// import React from "react";

import Arrivals from "../component/Arrivals";
import Category from "../component/Category";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import NavBar from "../component/NavBar";
import Newsletter from "../component/Newsletter";
import Offers from "../component/Offers";
import Products from "../component/Products";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Category />
      <Products />
      <Offers />
      <Arrivals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
