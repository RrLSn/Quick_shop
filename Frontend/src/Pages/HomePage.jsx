import { productApiUrl } from "../Api/axios";
import Arrivals from "../component/Arrivals";
import Category from "../component/Category";
import Hero from "../component/Hero";
import Newsletter from "../component/Newsletter";
import Offers from "../component/Offers";
import Products from "../component/Products";
import styles from "../styles/HomePage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [herodata, setHerodata] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const getRndItems = (arr, num) => {
    const shuffled = [...arr].slice(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(productApiUrl);
      const data = res.data;
      const items = getRndItems(res.data, 15);
      const arrivals = getRndItems(res.data, 15);
      setProducts(data);
      setHerodata(items);
      setNewArrivals(arrivals);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {products ? (
        <>
          <Hero herodata={herodata} />
          <Category />
          <Products products={products} />
          <Offers />
          <Arrivals newArrivals={newArrivals} />
          <Newsletter />
        </>
      ) : (
        <>{/* loader */}</>
      )}
    </div>
  );
};

export default HomePage;