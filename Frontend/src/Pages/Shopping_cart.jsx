import { Link } from "react-router-dom";
import styles from "../styles/Product_details.module.css";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { cartApiUrl } from "../Api/axios";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const estimation_style = "w-full h-[62px] border-b-[1px] flex justify-between py-[20px] border-[#CBCBCB] font-Urbanist font-[500] leading-[21.6px] text-[18px]"

const Shopping_cart = () => {
    const {auth} = useContext(AuthContext)
    const {setItemsInCart, discount, shippingFee, fullname} = useContext(ProductContext)
    const [cartItems, setCartItems] = useState([])
    const [cart, setCart] = useState(null)
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
    },[setItemsInCart, userId])

    const total = Math.round(cart.subtotal + discount + shippingFee)
    
  return (
    <div className="w-[100%] h-[max-content] flex flex-col gap-[56px] px-[88px]">
        <div className="w-full h-[63px] flex flex-col gap-[8px]">
            <h1 className="font-Urbanist font-[500] text-[32px] leading-[38.4px]">Shopping Cart</h1>
            <div className={`${styles.navigate_header} px-0`}>
                <p><Link to="/">Home</Link></p>
                /
                <p className="text-black">Shopping Cart</p>
            </div>
        </div>
        <section className="w-full h-[550px] flex gap-[40px]">
            <div className="w-[829px] min-h-[538px] h-[max-content] flex flex-col gap-[40px]">
                <span className="w-[670px] h-[24px] flex justify-between font-Urbanist font-[700] text-[20px] leading-[24px]">
                    <h1>item(s)</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Subtotal</h1>
                </span>
                {
                    cartItems.map((item, index) => {
                        return (
                            <div className="w-[829px] h-[184px] py-[32px] flex gap-[1px]" key={index}>
                                <div className="w-[325px] h-[120px] flex gap-[12px]">
                                    <img src={item.image} alt="" className="w-[120px] h-[120px]" />
                                    <p className="font-Urbanist font-[500] text-[14px] leading-[16.8px] text-[#575757]">
                                        {
                                            fullname === false ? truncateString(item.title) :
                                            item.title
                                        }
                                    </p>
                                </div>
                                <div></div>
                            </div>
                        )
                    })
                }
            </div>
            <form className="w-[395px] h-[468px] border-[1px] p-[32px] flex flex-col gap-[40px]">
                <h1 className="font-Urbanist font-[700] text-[28px] leading-[33.6px]">Cart Total</h1>
                <div className="w-[331px] h-[248px]">
                    <span className={estimation_style}>
                        <p>Subtotal</p>
                        <p>${cart.subtotal}</p>
                    </span>
                    <span className={estimation_style}>
                        <p>Discount</p>
                        <p>${discount}</p>
                    </span>
                    <span className={estimation_style}>
                        <p>Shipping Fee</p>
                        <p>${shippingFee}</p>
                    </span>
                    <span className={`${estimation_style} font-[700]`}>
                        <p>Total</p>
                        <p>${total}</p>
                    </span>
                </div>
                <button className="w-[331px] h-[42px] flex justify-center items-center text-white bg-[#F24810] border-[1px] rounded-sm hover:bg-white hover:text-[#F24810] border-[#F24810]">Proceed To Checkout</button>
            </form>
        </section>
    </div>
  )
}

export default Shopping_cart