import { useContext, useState } from "react";
import styles from "../styles/Product_details.module.css";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import Related_product from "../component/Related_product";

const Product_details = () => {
  const color_class = "w-[32px] h-[32px]"
  const button_class = "w-[290px] h-[100%] flex justify-center items-center border-[1px] font-Urbanist font-[500] text-[#575757] text-[18px] leading-[21.6px] bg-[#ffffff] hover:bg-[#F24810] hover:text-[#ffffff]"
  const review_style = "w-[250px] h-[100%] flex justify-center items-center font-Urbanist font-[500] text-[16px] leading-[19.2px]"

  const {selectedProduct, products} = useContext(ProductContext)
  const [selectedImage, setSelectedImage] = useState(null)
 

  const product_selected = products.find((products) => products._id === selectedProduct)

  const handleSelectedImageToShow = (index) => {
    setSelectedImage(index)
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigate_header}>
        <p><Link to="/">Home</Link></p>
        /
        <p><Link to="/shop">Shop</Link></p>
        /
        <p className="text-black">Product Title</p>
      </div>
      <section className={styles.product_details}>
        <div className={styles.product_slides}>
          <div className={styles.product_thumbnail}>
            {
              product_selected.image.map((img, index) => {
                return (
                  <img src={img} alt="product_Image" key={index} onClick={() => handleSelectedImageToShow(index)} />
                )
              })
            }
          </div>
          <img src={!selectedImage ? product_selected.image[0] : product_selected.image[selectedImage]} className="w-[488px]" alt="" />
        </div>
        <div className={styles.product_info}>
          <div className="w-full h-[75px] flex flex-col gap-[12px]">
            <h1 className="font-Urbanist text-[32px] leading-[38.4px] font-[500]">{product_selected.title}</h1>
            <span></span>
          </div>
          <h1 className="font-Urbanist font-[500] text-[64px] leading-[76.8px]">${product_selected.price}</h1>
          <p className="w-full min-h-[51px] h-[max-content] font-Urbanist font-[400] text-[14px] leading-[16.8px] text-[#575757]">{product_selected.description}</p>
          <div className="w-full h-[78px] flex gap-[40px]">
            <div className="w-[50%] h-[100%] flex flex-col gap-[12px]">
              <p className="font-Urbanist font-[500] text-[22px] leading-[26.6px">Color:</p>
              <div className="w-[232px] h-[40px] flex gap-[8px]">
                <span className={`${color_class} bg-[#8A1313]`}></span>
                <span className={`${color_class} bg-[#317E07]`}></span>
                <span className={`${color_class} bg-[#8C7127]`}></span>
                <span className={`${color_class} bg-[#246FB5]`}></span>
                <span className={`${color_class} bg-[#000000]`}></span>
              </div>
            </div>
            <div>
            <p className="font-Urbanist font-[500] text-[22px] leading-[26.6px">Qty:</p>
            <div></div>
            </div>
          </div>
          <div className="w-full h-[42px] flex gap-[32px]">
            <button className={button_class}>Add To Cart</button>
            <button className={button_class}>Buy Now</button>
          </div>
          <div className="w-full h-[57px] border-t-[1px] border-[#CBCBCB] flex justify-between py-[20px]">
            <span className="flex gap-2">Brand <p>Channel</p></span>
            <span className="flex gap-2">SKU <p>4564748</p></span>
          </div>
        </div>
      </section>
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
      <Related_product selectedProduct={selectedProduct} />
    </div>
  );
};

export default Product_details;
