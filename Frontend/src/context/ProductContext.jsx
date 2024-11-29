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
  const [currentSlider, setCurrentSlider] = useState(0)
  const [itemsInCart, setItemsInCart] = useState(0)
  const [itemAddedtoCart, setItemAddedtoCart] = useState(false)
  const [discount, setDiscount] = useState(0)
  const [shippingFee, setShippingFee] = useState(0)
  
  const fetchProduct = async() => {
    setItemAddedtoCart(false)
    try {
        const res = await axios.get(productApiUrl)
        const data = res.data
        setProducts(data)
    } catch (error) {
        console.log({message: error.message})
    }
  }

  const handleSelectedProduct = (_id) => {
    setSelectedProduct(_id)
  }

  const itemsPerSlide = 3;
  const startIndex = currentSlider * itemsPerSlide

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
        setProductQuantity,
        startIndex,
        itemsPerSlide,
        currentSlider,
        setCurrentSlider,
        handleSelectedProduct,
        itemsInCart,
        setItemsInCart,
        itemAddedtoCart,
        setItemAddedtoCart,
        shippingFee,
        setShippingFee,
        discount,
        setDiscount
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
