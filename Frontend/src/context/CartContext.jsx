import PropTypes from "prop-types"
import { createContext, useContext, useEffect, useState} from "react"
import axios from "axios"
import { cartApiUrl } from "../Api/axios";
import AuthContext from "./AuthProvider";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [itemsInCart, setItemsInCart] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [shippingFee, setShippingFee] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [itemDelMsg, setItemDelMsg] = useState()
    const [cart, setCart] = useState(null)
    const {auth} = useContext(AuthContext)
    const userId = auth?.userId

    useEffect(() => {
        if(!userId) return;
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
    },[setItemsInCart, userId, auth, setCart, setCartItems, cart])

    const handleDeleteFromCart = async(itemId) => {
        try {
            const res = await axios.delete(`${cartApiUrl}/${userId}/${itemId}`)
            if(res.status === 200){
            setItemDelMsg("Item deleted from Cart Sucessfully")
            alert("Item deleted from Cart Sucessfully")
            }
        } catch (error) {
            setItemDelMsg("Unable to delete Item from Cart")
        }
    }

    const handleAddedCartIncreament = async(itemId) => {
        try {
            const res = await axios.post(`${cartApiUrl}/${userId}/${itemId}/increase`)
            if(res.status === 200)
                console.log("done")
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddedCartDecreament = async(itemId) => {
        try {
            const res = await axios.post(`${cartApiUrl}/${userId}/${itemId}/decrease`)
            if(res.status === 200)
                console.log("done")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CartContext.Provider value={{
            itemsInCart, 
            setItemsInCart,
            discount, 
            setDiscount,
            shippingFee, 
            setShippingFee,
            cartItems, 
            setCartItems,
            cart, 
            setCart, 
            userId,
            handleDeleteFromCart,
            itemDelMsg,
            handleAddedCartIncreament,
            handleAddedCartDecreament
        }}>{children}</CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}