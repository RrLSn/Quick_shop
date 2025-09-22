import { Link } from "react-router-dom"
import styles from "../styles/Product_details.module.css";
import { useContext, useState } from "react";
import { states } from "../data";
import { CartContext } from "../context/CartContext";
import { truncateString } from "../utils";
import { ProductContext } from "../context/ProductContext";


const Checkout_page = () => {
    const [showPersonal, setShowPersonal] = useState(false)
    const [showShippingInfo, setShowShippingInfo] = useState(false)
    const [showPaymentMethod, setShowPaymentMethod] = useState(false)
    const {discount, shippingFee, cart, cartItems, handleDeleteFromCart,handleAddedCartIncreament, handleAddedCartDecreament} = useContext(CartContext)
    const {fullTitle} = useContext(ProductContext)

    const total = cart ? (cart.subtotal + discount + shippingFee).toFixed(2) : "0.00"

    const itemsToBuy = cartItems
    const itemsInCart = cart

    const estimation_style = "w-full h-[62px] border-b-[1px] flex justify-between py-[20px] border-[#CBCBCB] font-Urbanist font-[500] leading-[21.6px] text-[18px]"
    const infoDetails = "w-full h-[max-content] border"
    const qty_style = "md:w-[40px] md:h-[40px] w-[25px] h-[25px] bg-[#EEEEEE] flex justify-center items-center cursor-pointer"

  return (
    <div className="w-[100vw] h-[max-content] flex flex-col lg:gap-[38px] md:gap-6 gap-4 xl:px-10 lg:p-8 p-3">
        <div className="w-full h-[70px] flex flex-col gap-2">
            <h1 className="font-Urbanist font-[500] xl:text-3xl lg:text-[32px] text-2xl leading-[38.4px]">Checkout</h1>
            <div className={`${styles.navigate_header} px-0 w-full h-[17px] flex items-start lg:gap-2 gap-1 font-Urbanist font-normal text-[var(---neutral)] xl:text-[18px] lg:text-[14px] text-[12px]`}>
                <p className="cursor-pointer"><Link to="/">Home</Link></p>
                /
                <p className="text-black cursor-pointer">Checkout</p>
            </div>
        </div>
        <div className="w-full h-[max-content] flex justify-between">
            <div className="w-[829px] h-[max-content] flex flex-col gap-10">
                <div className={infoDetails}>
                    <button className="w-full h-[70px] flex justify-between items-center px-2 text-xl border-b border-[var(---neutral-500)]" onClick={() => setShowPersonal(!showPersonal)}>
                        Personal Details
                        {showPersonal ? (
                            <img src="/svg/ChevronUp.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px] w-[15px] h-[10px]" />
                            ) : (
                            <img src="/svg/ChevronDown.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px]  w-[15px] h-[10px]" />
                        )}
                    </button>
                    {
                        showPersonal && (
                            <div className="w-full h-[260px] flex flex-col gap-3">
                                <input type="text" placeholder="Full Name" className="w-full h-[70px] px-3 placeholder:text-xl text-xl bg-[var(---neutral-50)] outline-none" />
                                <input type="email" placeholder="Email" className="w-full h-[70px] px-3 placeholder:text-xl text-xl bg-[var(---neutral-50)] outline-none" />
                                <input type="number" placeholder="Phone Number" className="w-full h-[70px] px-3 placeholder:text-xl text-xl bg-[var(---neutral-50)] outline-none" />
                            </div>
                        )
                    }
                </div>
                <div className={infoDetails}>
                    <button className="w-full h-[70px] flex justify-between items-center px-2 text-xl border-b border-[var(---neutral-500)]" onClick={() => setShowShippingInfo(!showShippingInfo)}>
                        Shipping Info
                        {showShippingInfo ? (
                            <img src="/svg/ChevronUp.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px] w-[15px] h-[10px]" />
                            ) : (
                            <img src="/svg/ChevronDown.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px]  w-[15px] h-[10px]" />
                        )}
                    </button>
                    {
                        showShippingInfo && (
                            <div className="w-full h-[260px] flex flex-col gap-4">
                                <span className="w-full h-[70px] bg-[var(---neutral-50)] px-4">
                                    <select name="" id="" className="w-full h-full text-xl bg-[var(---neutral-50)] outline-none">
                                        <option value="" className="w-full">Select Country</option>
                                        <option value="" className="text-xs">Nigeria</option>
                                    </select>
                                </span>
                               
                                <span className="w-full h-[70px] bg-[var(---neutral-50)] px-4">
                                    <select name="" id="" className="w-full h-[70px] text-xl bg-[var(---neutral-50)] outline-none">
                                        <option value="">Select State</option>
                                        {
                                            states.map((state, index) => (
                                                <option className="text-xs" value={state} key={index}>{state}</option>
                                            ))
                                        }
                                    </select>
                                </span>
                                <span className="w-full h-[70px] flex items-center gap-5 px-4 text-xl bg-[var(---neutral-50)]">
                                    <img src="/svg/location.svg" alt="icon" className="w-[20px] h-[20px]" />
                                    <input type="text" placeholder="Enter Address" className="w-[95%] h-full text-xl placeholder:text-xl bg-[var(---neutral-50)]" />
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className={infoDetails}>
                    <button className="w-full h-[70px] flex justify-between items-center px-2 text-xl border-b border-[var(---neutral-500)]" onClick={() => setShowPaymentMethod(!showPaymentMethod)}>
                        Payment Method
                        {showPaymentMethod ? (
                            <img src="/svg/ChevronUp.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px] w-[15px] h-[10px]" />
                            ) : (
                            <img src="/svg/ChevronDown.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px]  w-[15px] h-[10px]" />
                        )}
                    </button>
                    {
                        showPaymentMethod && (
                            <div className="w-full h-[220px] flex flex-col mx-4">
                                <label className="w-full h-[70px] flex items-center gap-4 text-xl">
                                    <input type="radio" name="payment" value="card" id="" className="w-[20px] h-[20px]" />
                                    Credit/Debit
                                </label>
                                <label className="w-full h-[70px] flex items-center gap-4 text-xl">
                                    <input type="radio" name="payment" value="paypal" id="" className="w-[20px] h-[20px]" />
                                    PayPal
                                </label>
                                <label className="w-full h-[50px] flex items-center gap-4 text-xl">
                                    <input type="radio" name="payment" value="code" id="" className="w-[20px] h-[20px]" />
                                    Payment on Delivery
                                </label>
                            </div>
                        )
                    }
                </div>
            </div>
            
            <form id="submit" name="submit" className="xl:w-[450px] lg:w-[260px] md:w-[280px] w-full xl:min-h-[468px] lg:min-h-[380px] h-[max-content] border-[1px] xl:p-6 lg:p-4 p-2 flex flex-col xl:gap-6 lg:gap-3 gap-1">
                <h1 className="font-Urbanist font-[700] text-[28px] leading-[33.6px]">Your Order</h1>

                {/* section to increase, decrease order qty and delete items */}
                <div className="w-full h-[max-content] flex flex-col gap-4">
                    <h1 className="text-xl font-bold">Item(s)</h1>
                    {
                        itemsToBuy.map((itemToBuy, index) => (
                            <div key={index} className="w-full flex justify-between h-[200px] items-center">
                                <img src={itemToBuy.image} alt="" className="w-[130px] h-[150px] bg-white" />
                                <div className="w-[60%] h-[160px] flex flex-col gap-3">
                                    <span>
                                        <p className="font-Urbanist font-[500] xl:text-[18px] text-[15px] leading-[16.8px] text-[#575757]">
                                            {
                                                fullTitle === false ? truncateString(itemToBuy.title) :
                                                itemToBuy.title
                                            }
                                        </p>
                                        <img 
                                        src="/svg/delete.svg" 
                                        alt="" 
                                        className="md:w-[26px] md:h-[26px] w-[18px] h-[18px] cursor-pointer" 
                                        // onClick={() => handleDeleteFromCart(itemToBuy[index].productId)}
                                         />
                                    </span>
                                    <h1 className="text-2xl">${itemToBuy.total}</h1>
                                    <div className="flex gap-2 items-center">
                                        <span className={qty_style}
                                        //  onClick={() => handleAddedCartDecreament(itemToBuy[index].productId)}
                                            >-</span>
                                        {itemToBuy.quantity}
                                        <span className={qty_style}
                                        //  onClick={() => handleAddedCartIncreament(itemToBuy[index].productId)}
                                            >+</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Items to order */}
                <div className="w-full h-[248px]">
                    <span className={estimation_style}>
                        <p>Subtotal</p>
                        <p>${itemsInCart ? (itemsInCart.subtotal).toFixed(2) : "0.00"}</p>
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
                <button className="w-full xl:h-[60px] lg:h-[50px] h-[40px] font-bold flex justify-center items-center text-white bg-[#F24810] border-[1px] rounded-sm hover:bg-white hover:text-[#F24810] cursor-pointer border-[#F24810] xl:text-xl lg:text-[16px] text-[14px]">Place Order</button>
            </form>
        </div>
    </div>
  )
}

export default Checkout_page