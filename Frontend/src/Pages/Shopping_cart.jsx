import { Link } from "react-router-dom";
import styles from "../styles/Product_details.module.css";

const Shopping_cart = () => {
    const estimation_style = "w-full h-[62px] border-b-[1px] flex justify-between py-[20px] border-[#CBCBCB] font-Urbanist font-[500] leading-[21.6px] text-[18px]"
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
            <div className="w-[829px] min-h-[538px] h-[max-content] flex flex-col gap-[40px]"></div>
            <form className="w-[395px] h-[468px] border-[1px] p-[32px] flex flex-col gap-[40px]">
                <h1 className="font-Urbanist font-[700] text-[28px] leading-[33.6px]">Cart Total</h1>
                <div className="w-[331px] h-[248px]">
                    <span className={estimation_style}>
                        <p>Subtotal</p>
                        <p>$</p>
                    </span>
                    <span className={estimation_style}>
                        <p>Discount</p>
                        <p>$</p>
                    </span>
                    <span className={estimation_style}>
                        <p>Shipping Fee</p>
                        <p>$</p>
                    </span>
                    <span className={`${estimation_style} font-[700]`}>
                        <p>Total</p>
                        <p>$</p>
                    </span>
                </div>
                <button className="w-[331px] h-[42px] flex justify-center items-center text-white bg-[#F24810] border-[1px] rounded-sm hover:bg-white hover:text-[#F24810] border-[#F24810]">Proceed To Checkout</button>
            </form>
        </section>
    </div>
  )
}

export default Shopping_cart