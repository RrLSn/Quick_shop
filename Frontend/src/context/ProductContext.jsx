import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { productApiUrl } from "../Api/axios"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [fullTitle, setFullTitle] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(() => {return localStorage.getItem("selectedProductId") || null})
  const [productQuantity, setProductQuantity] = useState(1)
  const [currentSlider, setCurrentSlider] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [itemAddedtoCart, setItemAddedtoCart] = useState(false)
  const [qtyValue, setQtyValue] = useState(1)
  
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

  useEffect(() => {
    if(selectedProduct) {
      localStorage.setItem("selectedProductId", selectedProduct)
    } else {
      localStorage.removeItem("selectedProductId")
    }
  }, [selectedProduct])

  const handleSelectedProduct = (_id) => {
    setSelectedProduct(_id)
  }

  const handleQtyCountUp = () => {
    setQtyValue(qtyValue + 1)
  }

  const handleQtyCountDown = () => {
    if(qtyValue > 0){
      setQtyValue(qtyValue - 1)
    }
  }

  const itemsPerSlide = 3;

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProduct,
        fullTitle,
        setFullTitle,
        selectedProduct,
        setSelectedProduct,
        productQuantity,
        setProductQuantity,
        startIndex,
        itemsPerSlide,
        currentSlider,
        setCurrentSlider,
        handleSelectedProduct,
        itemAddedtoCart,
        setItemAddedtoCart,
        handleQtyCountUp,
        handleQtyCountDown,
        setStartIndex,
        qtyValue,
        setQtyValue
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
