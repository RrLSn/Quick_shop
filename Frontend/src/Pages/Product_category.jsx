
const Product_category = () => {
    const sizes = ["SM", "MD", "LG", "XL", "XXL"]
  return (
    <main className="w-full h-[1422px] flex flex-col gap-[56px] font-Urbanist">
        <section className="w-full h-[400px] bg-[#feede7] flex justify-between items-center px-[88px] overflow-hidden">
            <div className="w-[235px] h-[111px] top-[139px] left-[88px] gap-[8px]">
                <h1 className="text-[64px] font-[400] leading-[76.8px]">Clothing</h1>
                <span className="w-[169px] h-[26px] flex gap-[8px] leading-[26.4px] font-[400] font-Urbanist text-[22px] text-[#b2b2b2]">
                    <p className="hover:text-black cursor-pointer">Home</p>
                    /
                    <p className="hover:text-black cursor-pointer">Clothing</p>
                </span>
            </div>
            <div className="w-[783px] h-[783px] top-[-191px] left-[569px] bg-[#ffffff] rounded-full flex justify-center items-center overflow-hidden">
            <img src="/svg/cat_hero.svg" alt="" />
            </div>
        </section>

        <section className="search w-full h-[966px] px-[88px] gap-[40px] flex bg-[#ffffff]">
            <div className="w-[286px] h-[577px] flex flex-col gap-[56px]">
                <div className="w-full h-[114px] flex flex-col gap-[28px] font-Urbanist">
                    <p className="text-[22px] text-[400] leading-[26.4px]">Gender</p>
                    <div className="flex flex-col gap-[20px]">
                        <span className="w-full h-[20px] flex gap-[8px] items-center font-Urbanist text-[14px] text-[400] leading-[16.8px]">
                            <input type="checkbox" name="" id="" className="w-[20px] h-[20px] bg-[#eeeee]" />
                            Male
                        </span>
                        <span className="w-full h-[20px] flex gap-[8px] items-center">
                        <input type="checkbox" name="" id="" className="w-[20px] h-[20px] bg-[#eeeee]" />
                        Female
                        </span>
                    </div>
                </div>
                <div className="w-full h-[234px] flex flex-col gap-[28px]">
                <p className="text-[22px] text-[400] leading-[26.4px]">Size</p>
                <div className="w-full h-[180px] flex flex-col gap-[20px]">
                    {
                        sizes.map((size, index) => {
                            return (
                                <span key={index} className="w-full h-[20px] flex gap-[8px] items-center font-Urbanist text-[14px] text-[400] leading-[16.8px]">
                                <input type="checkbox" name="" id=""  className="w-[20px] h-[20px] bg-[#eeeee]" />
                                {size}
                            </span>
                            )
                        })
                    }
                </div>
                </div>
                <div className="w-full h-[117px] flex flex-col gap-[32px]">
                    <span className="w-full h-[35px] flex justify-between">
                        <p className="font-Urbanist text-[400] text-[22px] leading-[26.4px]">Price</p>
                        <button className="w-[90px] h-[35px] border-[1px] flex justify-center items-center text-center border-[#f24810] font-Urbanist text-[16px] text-[#f24810] leading-[19.2px]">Apply</button>
                    </span>
                </div>
            </div>
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
                <div className="w-full h-[740px] flex gap-[40px]"></div>
                <div className="w-full h-[40px] flex justify-between"></div>
            </div>
        </section>
    </main>
  )
}

export default Product_category