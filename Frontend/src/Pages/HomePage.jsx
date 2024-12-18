import { productApiUrl } from "../Api/axios.jsx";
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
  const [products, setProducts] = useState(null);
  const [herodata, setHerodata] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const getRndItems = (arr, num) => {
    const shuffled = [...arr].slice(() => 0.5 - Math.random()* num);
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(productApiUrl);
        
        const data = res.data;
        const items = getRndItems(data, 15);
        const arrivals = getRndItems(data, 15);
        setProducts(data);
        setHerodata(items);
        setNewArrivals(arrivals);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Hero herodata={herodata} />
      <Category />
      <Products products={products} />
      <Offers />
      <Arrivals newArrivals={newArrivals} />
      <Newsletter />
    </div>
  );
};

export default HomePage;
