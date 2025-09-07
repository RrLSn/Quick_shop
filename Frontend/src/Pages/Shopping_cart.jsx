import { Link } from "react-router-dom";
import styles from "../styles/Product_details.module.css";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { cartApiUrl } from "../Api/axios";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";

const estimation_style = "w-full xl:h-[62px] lg:h-[55px] h-[40px] border-b-[1px] flex justify-between py-[20px] border-[#CBCBCB] font-Urbanist font-[500] leading-[21.6px] xl:text-[18px] lg:text-[14px] text-[12px]"
const qty_style = "w-[40px] h-[40px] bg-[#EEEEEE] flex justify-center items-center cursor-pointer"

const Shopping_cart = () => {
    const {auth} = useContext(AuthContext)
    const {setItemsInCart, discount, shippingFee, fullname, cart, setCart, cartItems, setCartItems, qtyValue} = useContext(ProductContext)
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

    const total = Math.round(cart?.subtotal + discount + shippingFee)

    const handleDeleteCart = () => {
        // const itemId;
    }
    
  return (
    <div className="w-[100vw] h-[max-content] flex flex-col lg:gap-[38px] md:gap-6 gap-3 xl:px-20 lg:p-10 p-6">
        <div className="w-full h-[63px] flex flex-col gap-2">
            <h1 className="font-Urbanist font-[500] xl:text-3xl lg:text-[32px] text-2xl leading-[38.4px]">Shopping Cart</h1>
            <div className={`${styles.navigate_header} px-0 w-full h-[17px] flex items-start lg:gap-2 gap-1 font-Urbanist font-normal text-[var(---neutral)] xl:text-[18px] lg:text-[14px] text-[12px]`}>
                <p><Link to="/">Home</Link></p>
                /
                <p className="text-black">Shopping Cart</p>
            </div>
        </div>
        <section className="w-full min-h-[550px] h-[max-content] md:flex justify-between">
            <div className="xl:w-[829px] md:w-[60%] w-full h-[max-content] flex flex-col gap-[40px] md:mb-0 mb-5">
                <span className="w-full h-[300px] flex justify-between font-Urbanist font-[700] xl:text-2xl lg:text-[18px] text-[14px] leading-[24px] xl:px-10 md:px-5">
                    <div className="w-[100px] flex justify-center"><h1>item(s)</h1></div>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Subtotal</h1>
                </span>
                {/* {
                    cartItems?.map((item, index) => {
                        return (
                            <div className="w-[829px] h-[184px] py-[32px] flex gap-[1px] items-center" key={index}>
                                <div className="w-[325px] h-[120px] flex gap-[12px] items-center">
                                    <img src={item.image} alt="" className="w-[120px] h-[120px]  border-[1px]" />
                                    <p className="font-Urbanist font-[500] text-[14px] leading-[16.8px] text-[#575757]">
                                        {
                                            fullname === false ? truncateString(item.title) :
                                            item.title
                                        }
                                    </p>
                                </div>
                                <div className="w-[503px] h-[40px] flex justify-between items-center">
                                    <p>${item.price}</p>
                                    <div className="w-[116px] h-[40px] flex justify-center items-center gap-[8px] font-Urbanist font-[500] text-[16px] leading-[19.2px]">
                                        <span className={qty_style} >-</span>
                                        {qtyValue}
                                        <span className={qty_style}>+</span>
                                    </div>
                                    <p>${item.price*item.quantity}</p>
                                    <img src="/svg/delete.svg" alt="" className="w-[24px] h-[24px] cursor-pointer" onClick={handleDeleteCart} />
                                </div>
                            </div>
                        )
                    })
                } */}
                <div className="xl:w-[350px] lg:w-[320px] md:w-[280px] w-full h-[66px] flex justify-between lg:px-4 px-2 items-center">
                    <input type="text" placeholder="Discount Code" className="placeholder:xl:text-[18px] placeholder:lg:ext-[14px] placeholder:text-[12px] xl:px-2 px-1 lg:h-[42px] h-[32px]" />
                    <button className="xl:w-[107px] lg:w-[90px] w-[60px] lg:h-[42px] h-[32px] flex justify-center items-center bg-[#575757] font-Urbanist xl:text-xl lg:text-[14px] text-[12px] font-bold cursor-pointer leading-[21.6px] text-white">Apply</button>
                </div>
            </div>
            <form id="submit" className="xl:w-[395px] lg:w-[360px] md:w-[280px] w-full xl:h-[468px] lg:h-[380px] h-[280px] border-[1px] xl:p-8 lg:p-4 p-2 flex flex-col xl:gap-6 lg:gap-3 gap-1">
                <h1 className="font-Urbanist font-[700] xl:text-2xl lg:text-xl text-[18px] leading-[33.6px]">Cart Total</h1>
                <div className="w-full xl:h-[248px]">
                    <span className={estimation_style}>
                        <p>Subtotal</p>
                        <p>${cart?.subtotal}</p>
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
                <button className="w-full xl:h-[60px] lg:h-[50px] h-[40px] font-bold flex justify-center items-center text-white bg-[#F24810] border-[1px] rounded-sm hover:bg-white hover:text-[#F24810] cursor-pointer border-[#F24810] xl:text-xl lg:text-[16px] text-[14px]">Proceed To Checkout</button>
            </form>
        </section>
    </div>
  )
}

export default Shopping_cart