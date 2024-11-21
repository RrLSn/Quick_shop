// import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Category.module.css";

const Category = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.femaleCate}>
        <div className={styles.f_image}>
          <img src="/svg/femaleCollectn.svg" alt="" />
          <img src="/svg/f_Category.svg" alt="" />
        </div>
        <div className={styles.f_desc}>
          <span>
            Shop <h1>female</h1> category
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            itaque, laudantium minus dolorem quasi quo iusto nam aperiam aliquid
            reprehenderit omnis sit est consectetur dolores sint fugit corrupti
            cum harum!
          </p>
          <button>
            <Link to="/product_categories" >Explore Collections</Link>
          </button>
        </div>
      </div>
      <div className={styles.maleCate}>
        <div className={styles.m_desc}>
          <span>
            Shop <h1>male</h1> category
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            itaque, laudantium minus dolorem quasi quo iusto nam aperiam aliquid
            reprehenderit omnis sit est consectetur dolores sint fugit corrupti
            cum harum!
          </p>
          <button>
            <Link to="/product_categories">Explore Collections</Link>
          </button>
        </div>
        <div className={styles.m_image}>
          <img src="/svg/m_Category.svg" alt="" />
          <img src="/svg/maleCollectn.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
