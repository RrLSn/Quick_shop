import Checkbox from "@mui/material/Checkbox"
import Cate_sidebar from "../component/Cate_sidebar"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect} from "react"
import { categories, truncateString } from "../utils"
import { ProductContext } from "../context/ProductContext"

const Shop = () => {
  
  const {products, fetchProduct, fullname, setSelectedProduct} = useContext(ProductContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])

  const handleSelectedProduct = (_id) => {
    setSelectedProduct(_id)
    navigate("/product_details")
  }

  return (
    <div className="w-full min-h-[2920px] h-[max-content] flex flex-col gap-[48px] py-[40px]">
      <span className="w-full h-[26px] flex gap-[8px] leading-[26.4px] font-[400] font-Urbanist text-[22px] text-[#b2b2b2] px-[40px]">
        <p className="hover:text-black cursor-pointer "><Link to="/">Home</Link></p>
        /
        <p className="hover:text-black text-black cursor-pointer">Shop</p>
      </span>
      <section className="w-full h-[1300px] flex gap-40px] px-[40px]">
        <div className="w-[286px] h-[867px] flex flex-col gap-[56px]">
          <div className="w-full h-[234px] flex flex-col gap-[28px]">
            <p className="text-[22px] text-[400] leading-[26.4px]">Categories</p>
            <div className="w-full h-[180px] flex flex-col gap-[20px]">
              {
                categories.map((category, index) => {
                  return (
                  <span key={index} className="w-full h-[20px] flex gap-[8px] items-center font-Urbanist text-[14px] text-[400] leading-[16.8px]">
                    <Checkbox color='default' />
                    {category}
                  </span>
                  )
                })
              }
            </div>
            <Cate_sidebar />
          </div>
        </div>
        <div className="w-full h-[1300px] flex flex-col gap-[40px]">
          <div className="w-full h-[50px] flex justify-between">
            <span className="w-[286px] h-[50px] gap-[4px] flex justify-between items-center px-4 border-[1px] border-[#575757] rounded-md">
              <input type="text" placeholder="Search for products.." className="w-[90%] h-[100%] outline-none font-Urbanist font-[400] leading-[16.6px] text-[14px] text-[#575757]" />
              <img src="/svg/search_icon.svg" alt="" className="w-[15px] h-[15px]" />
            </span>
            <div className="w-[255px] h-[50px] gap-[20px] flex text-center items-center">
                  Sort by
              <span className="w-[183px] h-[100%] gap-[4px] flex justify-center items-center text-center bg-[#eeeeee]"></span>
            </div>
          </div>
          <div className="w-full h-[1130px] flex flex-wrap gap-y-[40px] gap-x-[30px] overflow-hidden justify-center items-center">
            {
              products.map((product) => {
                return (
                  <div key={product._id} className="w-1/4 min-w-[286px] h-[350px] flex flex-col justify-between cursor-pointer" onClick={() => handleSelectedProduct(product._id)}>
                    <img src={product.image[0]} alt="" className="w-full h-[283px]" />
                      <span className="w-[183px] h-[51px] flex flex-col top-[299px] gap-[8px]">
                        <p>
                            {fullname === false? truncateString(product.title) : product.title}
                        </p>
                        <p>${product.price}</p>
                      </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop