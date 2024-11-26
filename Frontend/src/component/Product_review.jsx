import styles from "../styles/Product_details.module.css";

const Product_review = () => {
    const review_style = "w-[250px] h-[100%] flex justify-center items-center font-Urbanist font-[500] text-[16px] leading-[19.2px]"
  return (
    <section className={styles.product_review}>
        <div className="w-full h-[67px] border-b-[1px] border-[#252525] flex justify-center">
          <span className={`${review_style} text-[#252525]`}>Description</span>
          <span className={`${review_style} bg-[#252525] text-[#ffffff]`}>Reviews</span>
        </div>
        <div className="w-full h-[588px] px-[32px] flex gap-[40px] items-center">
          <div className="w-[580px] h-[100%]">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="w-[580px] h-[483px] flex flex-col gap-[24px]">
            <span className="w-full h-[45px] flex flex-col gap-[4px]">
              <h1 className="font-Urbanist font-[500] text-[20px] leading-[24px] text-[#252525]">Add a Review</h1>
              <p className="font-Urbanist font-[400] text-[14px] leading-[16.8px] text-[#575757]">Your email address will not be published</p>
            </span>
            <form action="" className="w-full h-[414px]">
                <span className="w-[100%] h-[50px] flex gap-[4px] bg-[#EEEEEE]"></span>
              <span className="w-[100%] h-[50px] flex gap-[4px] bg-[#EEEEEE]"></span>
              <textarea name="" id="" placeholder="Write your review here.." className="w-[100%] h-[200px] bg-[#EEEEEE]"></textarea>
              <button className="w-[179px] h-[42px] flex justify-center items-center bg-[#F24810] text-white font-Urbanist font-[500] text-[18px] leading-[21.6px]">Submit Review</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Product_review