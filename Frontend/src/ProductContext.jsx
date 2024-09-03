// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     try {
//       axios.get("http://localhost:8080/api/products").then((res) => {
//         setProducts(res.data);
//       });
//     } catch (error) {
//       console.log({ message: error.message });
//     }
//   }, []);

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         setProducts,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// ProductProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
