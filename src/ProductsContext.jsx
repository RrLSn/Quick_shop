// import { createContext } from "react";
// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export const ProductsContext = createContext();

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [herodata, setHerodata] = useState([]);
//   const [newArrivals, setNewArrivals] = useState([]);

//   const getRndItems = (arr, num) => {
//     const shuffled = [...arr].slice(() => 0.5 - Math.random());
//     return shuffled.slice(0, num);
//   };

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/products");
//       const data = res.data;
//       const items = getRndItems(res.data, 15);
//       const arrivals = getRndItems(res.data, 15);
//       setProducts(data);
//       setHerodata(items);
//       setNewArrivals(arrivals);
//     } catch (error) {
//       console.log({ message: error.message });
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <ProductsContext.Provider
//       value={{
//         fetchData,
//         products,
//         setProducts,
//         herodata,
//         setHerodata,
//         newArrivals,
//         setNewArrivals,
//       }}
//     >
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// ProductsProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
