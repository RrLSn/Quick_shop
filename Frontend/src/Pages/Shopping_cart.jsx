import { Link } from "react-router-dom";
import styles from "../styles/Product_details.module.css";
import { useContext} from "react";
import { ProductContext } from "../context/ProductContext";
import { truncateString } from "../utils";
import { CartContext } from "../context/CartContext";

const estimation_style = "w-full xl:h-[62px] lg:h-[55px] h-[40px] border-b-[1px] flex justify-between py-[20px] border-[#CBCBCB] font-Urbanist font-[500] leading-[21.6px] xl:text-[18px] lg:text-[14px] text-[12px]"
const qty_style = "md:w-[40px] md:h-[40px] w-[25px] h-[25px] bg-[#EEEEEE] flex justify-center items-center cursor-pointer"

const Shopping_cart = () => {
    const {fullTitle} = useContext(ProductContext)
    const {discount, shippingFee, cart, cartItems, handleDeleteFromCart,handleAddedCartIncreament, handleAddedCartDecreament} = useContext(CartContext)

    const total = cart ? (cart.subtotal + discount + shippingFee).toFixed(2) : "0.00"
    
  return (
    <div className="w-[100vw] h-[max-content] flex flex-col lg:gap-[38px] md:gap-6 gap-4 xl:px-20 lg:p-8 p-3">
        <div className="w-full h-[63px] flex flex-col gap-2">
            <h1 className="font-Urbanist font-[500] xl:text-3xl lg:text-[32px] text-2xl leading-[38.4px]">Shopping Cart</h1>
            <div className={`${styles.navigate_header} px-0 w-full h-[17px] flex items-start lg:gap-2 gap-1 font-Urbanist font-normal text-[var(---neutral)] xl:text-[18px] lg:text-[14px] text-[12px]`}>
                <p><Link to="/">Home</Link></p>
                /
                <p className="text-black">Shopping Cart</p>
            </div>
        </div>
        <section className="w-full min-h-[550px] h-[max-content] lg:flex justify-between">
            <div className="xl:w-[829px] lg:w-[680px] w-full h-[max-content] flex flex-col lg:mb-0 mb-5">
                <span className="w-full h-[40px] md:flex hidden xl:gap-9 gap-5 items-center font-Urbanist font-[700] xl:text-2xl lg:text-[18px] text-[14px] leading-[24px]">
                    <h1 className="xl:w-[300px] lg:w-[250px] w-[280px] h-full flex items-center justify-center">item(s)</h1>
                    <h1 className="w-[100px] h-full flex items-center justify-center">Price</h1>
                    <h1 className="w-[120px] h-full flex items-center justify-center">Quantity</h1>
                    <h1 className="w-[120px] h-full flex items-center justify-center">Subtotal</h1>
                </span>
                <div className="w-full h-[max-content] flex flex-col items-center gap-4">
                    {
                    cartItems?.map((item, index) => {
                        return (
                            <div className="w-full h-[180px] flex xl:gap-9 md:gap-5 gap-2 items-center" key={index}>
                                <div className="xl:w-[300px] lg:w-[250px] md:w-[280px] w-[35%] md:h-[150px] h-full md:flex text-center gap-3 items-center justify-center">
                                    <img src={item.image} alt="" className="w-[120px] h-[120px]  border-[1px] md:mb-0 mb-4" />
                                    <p className="font-Urbanist font-[500] xl:text-[18px] text-[15px] leading-[16.8px] text-[#575757]">
                                        {
                                            fullTitle === false ? truncateString(item.title) :
                                            item.title
                                        }
                                    </p>
                                </div>
                                <div className="xl:w-[503px] md:w-[400px] w-[220px] h-[40px] flex xl:gap-9 md:gap-5 items-center">
                                    <p className="w-[100px] flex justify-center xl:text-xl md:text-[16px] text-[12px]">${item.price}</p>
                                    <div className="w-[120px] h-[40px] flex justify-center items-center md:gap-2 gap-1 font-Urbanist font-[500] md:text-[16px] text-[12px] leading-[19.2px]">
                                        <span className={qty_style} onClick={() => handleAddedCartDecreament(cartItems[index].productId)}>-</span>
                                        {item.quantity}
                                        <span className={qty_style} onClick={() => handleAddedCartIncreament(cartItems[index].productId)}>+</span>
                                    </div>
                                    <p className="w-[120px] flex justify-center xl:text-xl md:text-[16px] text-[12px]">${(item.price*item.quantity).toFixed(2)}</p>
                                    <img 
                                        src="/svg/delete.svg" 
                                        alt="" 
                                        className="md:w-[26px] md:h-[26px] w-[18px] h-[18px] cursor-pointer" 
                                        onClick={() => handleDeleteFromCart(cartItems[index].productId)} />
                                </div>
                            </div>
                        )
                     })
                    }
                </div>
                <div className="xl:w-[350px] lg:w-[320px] md:w-[280px] w-full lg:h-[66px] h-[50px] flex justify-between lg:px-4 px-2 items-center border">
                    <input type="text" placeholder="Discount Code" className="placeholder:xl:text-[18px] placeholder:lg:ext-[14px] placeholder:text-[12px] xl:px-2 px-1 lg:h-[42px] h-[32px]" />
                    <button className="xl:w-[107px] lg:w-[90px] w-[60px] lg:h-[42px] h-[32px] flex justify-center items-center bg-[#575757] font-Urbanist xl:text-xl lg:text-[14px] text-[12px] font-bold cursor-pointer leading-[21.6px] text-white">Apply</button>
                </div>
            </div>
            <form id="submit" name="submit" className="xl:w-[395px] lg:w-[260px] md:w-[280px] w-full xl:h-[468px] lg:h-[380px] h-[280px] border-[1px] xl:p-8 lg:p-4 p-2 flex flex-col xl:gap-6 lg:gap-3 gap-1">
                <h1 className="font-Urbanist font-[700] xl:text-2xl lg:text-xl text-[18px] leading-[33.6px]">Cart Total</h1>
                <div className="w-full xl:h-[248px]">
                    <span className={estimation_style}>
                        <p>Subtotal</p>
                        <p>${cart ? (cart.subtotal).toFixed(2) : "0.00"}</p>
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
                <button className="w-full xl:h-[60px] lg:h-[50px] h-[40px] font-bold flex justify-center items-center text-white bg-[#F24810] border-[1px] rounded-sm hover:bg-white hover:text-[#F24810] cursor-pointer border-[#F24810] xl:text-xl lg:text-[16px] text-[14px]"><Link to="/checkout">Proceed To Checkout</Link></button>
            </form>
        </section>
    </div>
  )
}

export default Shopping_cart