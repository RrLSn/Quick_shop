import styles from "../styles/Product_details.module.css";

const Product_review = () => {
  return (
    <section className={styles.product_review}>
      <div className="md:w-[50%] w-full lg:h-[580px] h-[430px] flex flex-col gap-4 md:mb-0 mb-4">
        <span className="w-full h-xl:[67px] lg:h-[57px] h-[37px] border-b-[1px] border-[#252525] flex md:justify-end items-center font-Urbanist font-[500] xl:text-2xl lg:text-xl text-[16px] leading-[19.2px] text-[#252525]  px-4">Description</span>
        <div className="w-[580px] px-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="md:w-[50%] w-full lg:h-[580px] h-[max-content] flex flex-col gap-4">
        <span className="w-full h-xl:[67px] lg:h-[57px] h-[37px] border-b-[1px] border-[#252525] flex  px-4">
          <p className="lg:w-[250px] w-[150px] h-full flex justify-center items-center font-Urbanist font-[500] xl:text-2xl lg:text-xl text-[16px] leading-[19.2px] bg-[#252525] text-[#ffffff]">Reviews</p>
        </span>
          <div className="w-full lg:h-[483px] h-[380px] flex flex-col lg:gap-6 gap-4 px-4">
            <span className="w-full h-[45px] flex flex-col gap-1">
              <h1 className="font-Urbanist font-[500] xl:text-2xl lg:text-xl text-[16px]
               leading-6 text-[#252525]">Add a Review</h1>
              <p className="font-Urbanist font-[400] xl:text-[16px] lg:text-[14px] text-[11px] leading-[16.8px] text-[#575757]">Your email address will not be published</p>
            </span>
            <form action="" id="submit" name="submit" className="w-full lg:h-[414px] h-[300px]">
                <span className="w-full h-lg:[50px] h-[35px] flex gap-3 bg-[#EEEEEE] xl:px-4 lg:px-3 px-2">
                  <img src="/svg/mailIcon.svg" alt="" className="lg:w-[20px] lg:h-[20px] h-[14px] w-[14px]" />
                <input
                  type="text"
                  placeholder="Email Address"
                  id="email"
                  autoComplete="off"
                  required
                  className="w-[80%] h-full bg-[#EEEEEE] placeholder:md:text-[14px]"
                />
                </span>
              <span  className="w-full h-lg:[50px] h-[35px] flex gap-3 bg-[#EEEEEE] xl:px-4 lg:px-3 px-2">
                <img src="/svg/phoneIcon.svg" alt="" className="lg:w-[20px] lg:h-[20px] h-[14px] w-[14px]" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  id="phone"
                  className="w-[80%] h-full bg-[#EEEEEE] placeholder:md:text-[14px]"
                />
              </span>
              <textarea name="" id="" placeholder="Write your review here.." className="w-full lg:h-[200px] h-[150px] bg-[#EEEEEE] placeholder:lg:text-xl placeholder:text-[16px]"></textarea>
              <button className="xl:w-[179px] lg:w-[160px] w-[120px] cursor-pointer lg:h-[50px] h-[37px] font-medium flex justify-center items-center bg-[#F24810] text-white font-Urbanist xl:text-xl lg:text-[18px] text-[14px] leading-[21.6px]">Submit Review</button>
            </form>
          </div>
      </div>
      </section>
  )
}

export default Product_review