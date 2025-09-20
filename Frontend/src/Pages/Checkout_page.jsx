import { Link } from "react-router-dom"
import styles from "../styles/Product_details.module.css";


const Checkout_page = () => {
    const estimation_style = "w-full h-[62px] border-b-[1px] flex justify-between py-[20px] border-[#CBCBCB] font-Urbanist font-[500] leading-[21.6px] text-[18px]"

  return (
    <div className="w-full h-[max-content] px-[88px] py-[88px]">
        <div className="w-full h-[63px] flex flex-col gap-[8px]">
            <h1 className="font-Urbanist font-[500] text-[32px] leading-[38.4px]">Checkout</h1>
            <div className={`${styles.navigate_header} px-0`}>
                <p><Link to="/">Home</Link></p>
                /
                <p className="text-black">Checkout</p>
            </div>
        </div>
        <div className="w-full h-[852px] flex gap-[40px]">
            <div className="w-[829px] h-[698px] flex flex-col gap-[40px]"></div>
            <form id="submit" name="submit" className="w-[395px] h-[max-content] border-[1px] p-[32px] flex flex-col gap-[40px]">
                <h1 className="font-Urbanist font-[700] text-[28px] leading-[33.6px]">Cart Total</h1>
                <div className="w-full h-[248px]">
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
                <button className="w-[331px] h-[42px] flex justify-center items-center text-white bg-[#F24810] border-[1px] rounded-sm hover:bg-white hover:text-[#F24810] border-[#F24810]">Place Order</button>
            </form>
        </div>
    </div>
  )
}

export default Checkout_page