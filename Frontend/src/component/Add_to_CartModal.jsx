import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { useNavigate } from "react-router-dom"

const button_style = "w-full lg:h-[42px] h-[40px] lg:text-[18px] md:text-[14px] text-[12px] border-[1px] flex justify-center items-center text-[#F24810] bg-[#ffffff] hover:text-[#ffffff] hover:bg-[#F24810] border-[#F24810] rounded-sm cursor-pointer"

const Add_to_CartModal = () => {
  const {itemAddedtoCart, setItemAddedtoCart} = useContext(ProductContext)
  const navigate = useNavigate()

  const handleProceedto_checkout = () => {
    setItemAddedtoCart(false)
    navigate("/checkout")
  }

  const handleContShopping = () => {
    setItemAddedtoCart(false)
    navigate("/shop")
  }

  const handleX = () => {
    setItemAddedtoCart(false)
  }

  return (
    <section className="w-[100vw] h-screen fixed inset-0 z-50 flex justify-center items-center bg-black/40">
      <div className={itemAddedtoCart ? "lg:w-[500px] md:w-[400px] w-[350px] h-[max-content] flex flex-col items-center lg:gap-5 md:gap-3 gap-2 lg:p-5 p-3 absolute bg-white shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] rounded-sm" : "hidden"}>
        <p className="w-full flex justify-end" onClick={handleX}>X</p>
        <div className="w-full h-[72px] flex flex-col justify-center items-center text-center">
          <h1 className="font-Urbanist font-[500] lg:text-[22px] md:text-[18px] text-[16px] leadinf-[26.4px] text-[#45B20A]">Successfully Added</h1>
          <p className="font-Urbanist font-[400] lg:text-[14px] md:text-[12px] text-[10px] leading-[16.8px]text-[#4F4F4F]">Continue shopping if you want to add other products to your Cart or proceed to checkout to make your purchase now</p>
        </div>
        <div className="w-full lg:h-[96px] h-[80px] flex flex-col md:gap-3 gap-2">
          <button className={button_style} onClick={handleContShopping}>Continue Shopping</button>
          <button className={button_style} onClick={handleProceedto_checkout}>Proceed To Checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Add_to_CartModal