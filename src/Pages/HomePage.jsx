// import React from "react";

import Category from "../component/Category";
import Hero from "../component/Hero";
import NavBar from "../component/NavBar";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Category />
    </div>
  );
};

export default HomePage;
