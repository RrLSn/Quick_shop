import { useContext, useEffect} from "react"
import Cate_sidebar from "../component/Cate_sidebar"
import { truncateString } from "../utils"
import { Link, useNavigate } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"

const Product_category = () => {
    const navigate = useNavigate()

    const {products, fetchProduct, fullname, setSelectedProduct} = useContext(ProductContext)

    useEffect(() => {
        fetchProduct()
    }, [fetchProduct])

    const handleSelectedProduct = (_id) => {
        setSelectedProduct(_id)
        navigate("/product_details")
    }

  return (
    <main className="w-full h-[1422px] flex flex-col gap-[56px] font-Urbanist">
        <section className="w-full h-[400px] bg-[#feede7] flex justify-between items-center px-[88px] overflow-hidden">
            <div className="w-[235px] h-[111px] top-[139px] left-[88px] gap-[8px]">
                <h1 className="text-[64px] font-[400] leading-[76.8px]">Clothing</h1>
                <span className="w-[169px] h-[26px] flex gap-[8px] leading-[26.4px] font-[400] font-Urbanist text-[22px] text-[#b2b2b2]">
                    <p className="hover:text-black cursor-pointer"><Link to="/">Home</Link></p>
                    /
                    <p className="hover:text-black cursor-pointer">Clothing</p>
                </span>
            </div>
            <div className="w-[783px] h-[783px] top-[-191px] left-[569px] bg-[#ffffff] rounded-full flex justify-center items-center overflow-hidden">
            <img src="/svg/cat_hero.svg" alt="" />
            </div>
        </section>

        <section className="search w-full h-[966px] px-[88px] gap-[40px] flex bg-[#ffffff]">
            <Cate_sidebar />
            <div className="w-[938px] h-[910px] flex flex-col gap-[40px]">
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
                <div className="w-full h-[740px] flex flex-wrap gap-y-[40px] gap-x-[30px] overflow-hidden justify-center items-center">
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
                <div className="w-full h-[40px] flex justify-between"></div>
            </div>
        </section>
    </main>
  )
}

export default Product_category