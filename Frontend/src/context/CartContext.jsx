import PropTypes from "prop-types"
import { createContext, useContext, useEffect, useState} from "react"
import axios from "axios"
import { cartApiUrl } from "../Api/axios";
import AuthContext from "./AuthProvider";
// import { ProductContext } from "./ProductContext";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [itemsInCart, setItemsInCart] = useState(0)
    const [itemAddedtoCart, setItemAddedtoCart] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [shippingFee, setShippingFee] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState(null)
    const {auth} = useContext(AuthContext)
    const userId = auth.userId

    useEffect(() => {
        const fetchCartItems = async() => {
            try {
                const res = await axios.get(`${cartApiUrl}/${userId}`)
                if(res.status === 200){
                  const data = await res.data
                  const item_count = data.items.length
                  setItemsInCart(item_count)
                  setCartItems(data.items)
                  setCart(data)
                }
            } catch (error) {
                console.log("Error loading cart:", error.message)
            }
        }
        fetchCartItems()
    },[setItemsInCart, userId, auth, setCart, setCartItems])

    return (
        <CartContext.Provider value={{
            itemsInCart, setItemsInCart,itemAddedtoCart, setItemAddedtoCart,discount, setDiscount,shippingFee, setShippingFee,cartItems, setCartItems,cart, setCart
        }}>{children}</CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}