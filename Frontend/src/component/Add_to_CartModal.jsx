import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { useNavigate } from "react-router-dom"

const button_style = "w-full h-[42px] border-[1px] flex justify-center items-center text-[#F24810] bg-[#ffffff] hover:text-[#ffffff] hover:bg-[#F24810] border-[#F24810] rounded-sm"

const Add_to_CartModal = () => {
    const {itemAddedtoCart, setItemAddedtoCart} = useContext(ProductContext)
    const navigate = useNavigate()
    const handleProceedto_checkout = () => {
      navigate("/checkout")
      setItemAddedtoCart(false)
    }

  return (
    <div className={itemAddedtoCart ? "w-[max-content] h-[max-content] flex flex-col items-center gap-[24px] p-[30px] absolute bg-white" : "hidden"}>
        <p className="w-full flex justify-end" onClick={() => setItemAddedtoCart(false)}>X</p>
        <div className="w-[480px] h-[72px] flex flex-col justify-center items-center text-center">
            <h1 className="font-Urbanist font-[500] text-[22px] leadinf-[26.4px] text-[#45B20A]">Successfully Added</h1>
            <p className="font-Urbanist font-[400] text-[14px] leading-[16.8px]text-[#4F4F4F]">Continue shopping if you want to add other products to your Cart or proceed to checkout to make your purchase now</p>
        </div>
        <div className="w-[420px] h-[96px] flex flex-col gap-[12px]">
            <button className={button_style} onClick={() => setItemAddedtoCart(false)}>Continue Shopping</button>
            <button className={button_style} onClick={handleProceedto_checkout}>Proceed To Checkout</button>
        </div>
    </div>
  )
}

export default Add_to_CartModal