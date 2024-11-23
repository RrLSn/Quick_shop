import axios from "axios";
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { productApiUrl } from "../Api/axios"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [fullname, setFullname] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productQuantity, setProductQuantity] = useState(1)

  const fetchProduct = async() => {
    try {
        const res = await axios.get(productApiUrl)
        const data = res.data
        setProducts(data)
    } catch (error) {
        console.log({message: error.message})
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProduct,
        fullname,
        setFullname,
        selectedProduct,
        setSelectedProduct,
        productQuantity,
        setProductQuantity
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
