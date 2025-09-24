import Checkbox from "@mui/material/Checkbox"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect} from "react"
import { categories, truncateString } from "../utils"
import { ProductContext } from "../context/ProductContext"
import Cate_sidebar from "../component/Cate_sidebar"
import Recommeded_product from "../component/Recommeded_product"
import Top_selling from "../component/Top_selling"

const Shop = () => {
  const {products, fetchProduct, fullTitle, handleSelectedProduct} = useContext(ProductContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetchProduct()
  }, [fetchProduct])

  return (
    <div className="w-[100vw] h-[max-content] flex flex-col gap-7 xl:px-10 px-5 lg:py-5 py-3">
      <span className="w-full lg:h-[40px] h-[30px] flex items-center lg:gap-2 gap-1 leading-[26.4px] font-Urbanist lg:text-2xl text-xl font-bold text-[#b2b2b2]">
        <p className="hover:text-black cursor-pointer "><Link to="/">Home</Link></p>
        /
        <p className="hover:text-black text-black cursor-pointer">Shop</p>
      </span>
      <section className="w-full h-[max-content] md:flex block justify-between items-start px-0">
        <div className="xl:w-[320px] lg:w-[220px] w-[170px] h-[max-content] md:flex hidden flex-col lg:gap-5 gap-3 bg-blue-300">
          <div className="w-full h-[mx-content] flex flex-col lg:gap-5 gap-3">
            <p className="xl:text-2xl lg:text-xl text-[17px] font-medium leading-[26.4px]">Categories</p>
            <div className="w-full h-[max-content] flex flex-col xl:gap-5 lg:gap-2 gap-1">
              {
                categories.map((category, index) => {
                  return (
                  <span key={index} className="w-full h-[30px] flex gap-2 items-center font-Urbanist xl:text-[18px] lg:text-[15px] text-[12px] text-[400] leading-[16.8px]">
                    <Checkbox color='default' size="small" />
                    {category}
                  </span>
                  )
                })
              }
            </div>

            <Cate_sidebar />
          </div>
        </div>
        <div className="md:w-[73%] w-full xl:h-[1250px] h-[max-content] flex flex-col lg:gap-10 gap-4">
          <div className="w-full xl:h-[50px] lg:h-[40px] h-[30px] flex justify-between">
            <span className="xl:w-[350px] lg:w-[250px] md:w-[170px] w-[160px] h-full gap-1 flex justify-between items-center px-2 border-[1px] border-[#575757] rounded-md">
              <input type="text" placeholder="Search for products.." className="w-[90%] h-full outline-none font-Urbanist font-[400] leading-[16.6px] lg:text-[14px] text-[10px] text-[#575757] placeholder:xl:text-xl placeholder:lg:text-xs placeholder:text-[10px]" />
              <img src="/svg/search_icon.svg" alt="" className="xl:w-[20px] xl:h-[20px] lg:w-[18px] lg:h-[18px] w-[14px] h-[14px]" />
            </span>
            <div className="xl:w-[280px] lg:w-[230px] md:w-[160px] w-[150px] h-full justify-between flex text-center items-center xl:text-xl lg:text-[18px] md:text-[14px] text-[12px]">
                  Sort by:
              <span className="xl:w-[183px] lg:w-[150px] md:w-[110px] w-[90px] h-full gap-1 flex justify-center items-center text-center bg-[#eeeeee]"></span>
            </div>
          </div>
          <div className="w-full xl:h-[1200px] lg:h-[1080px] h-[760px] flex flex-wrap xl:gap-y-[40px] gap-y-[20px] gap-x-[20px] xl:gap-x-[30px] overflow-hidden justify-center items-center">
            {
              products.map((product) => {
                return (
                  <div key={product._id} className="xl:w-[286px] lg:w-[200px] w-[150px] xl:h-[350px] lg:h-[250px] h-[170px] flex flex-col justify-between cursor-pointer" onClick={() => {
                    handleSelectedProduct(product._id)
                    navigate("/product_details")
                  }}>
                    <img src={product.image[0]} alt="" className="w-full xl:h-[283px] lg:h-[200px] h-[140px]" />
                      <span className="w-[183px] h-[51px] flex flex-col top-[299px] xl:gap-2 gap-1 lg:text-[17px] text-[13px]">
                        <p>
                            {fullTitle === false? truncateString(product.title) : product.title}
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
      <Recommeded_product products={products} navigate={navigate} />
      <Top_selling navigate={navigate} />
    </div>
  )
}

export default Shop