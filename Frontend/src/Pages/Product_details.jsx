import { useContext, useEffect, useState } from "react";
import styles from "../styles/Product_details.module.css";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import Related_product from "../component/Related_product";
import { Rating, Stack } from "@mui/material"
import Product_review from "../component/Product_review";
import Add_to_CartModal from "../component/Add_to_CartModal";
import axios from "axios";
import { cartApiUrl } from "../Api/axios";
import AuthContext from "../context/AuthProvider";
import { CartContext } from "../context/CartContext";


  const color_class = "lg:w-[32px] w-[25px] h-full"
  const button_class = "xl:w-[290px] lg:w-[190px] w-[90px] h-full flex justify-center items-center border-[1px] font-Urbanist font-[500] text-[#575757] xl:text-[18px] lg:text-[16px] text-[10px] leading-[21.6px] bg-[#ffffff] hover:bg-[#F24810] hover:text-[#ffffff]cursor-pointer"
  const qty_style = "lg:w-[40px] w-[25px] h-full bg-[#EEEEEE] flex justify-center items-center cursor-pointer"

const Product_details = () => {
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    selectedProduct, 
    products, 
    itemAddedtoCart, 
    setItemAddedtoCart,
    qtyValue, 
    handleQtyCountUp,
    handleQtyCountDown,
    setQtyValue,
    fetchProduct
  } = useContext(ProductContext)

  const {setItemsInCart} = useContext(CartContext)
  const [selectedImage, setSelectedImage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async() => {
      if (products.length === 0){
      await fetchProduct()
      }
      setLoading(false)
    }
    init()
  },[])

  const selectedProductId = selectedProduct || localStorage.getItem("selectedProductId")

  const product_selected = products.find((products) => products._id === selectedProductId)

  const handleSelectedImageToShow = (index) => {
    setSelectedImage(index)
  }

  const userId = auth?.userId
  
  const handleAddToCart = async(product_selected) => {
    if(!userId){
      navigate("/auth/login")
    }
    try {
      const res = await axios.post(cartApiUrl, {
        userId: userId,
        productId: selectedProductId,
        title: product_selected.title,
        price: product_selected.price,
        quantity: qtyValue,
        image: product_selected.image[0],
        tax: product_selected.tax,
        shippingFee: product_selected.shipping
      })
      if(res.status === 200){
        setItemAddedtoCart(true)
        setQtyValue(1)
      }
      const item_count = res.data.items.length
      setItemsInCart(item_count)
    } catch (error) {
      alert("Error adding to cart:", error.message)
    }
  }

  const handleBuyNow = () => {
    if(!userId){
      navigate("/auth/login")
    } else{
      handleAddToCart(product_selected)
      navigate("/shopping_cart")
    }
  }

  if (!product_selected || loading) {
    return <div className={styles.wrapper}></div>
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
          <img src={product_selected.image[selectedImage]} className="w-[488px]" alt="" />
        </div>
        <div className={styles.product_info}>
          <div className="w-full xl:h-[100px] lg:h-[70px] h-[100px] bgy3 flex flex-col">
            <h1 className="font-Urbanist xl:text-3xl lg:text-2xl text-[18px] leading-[38.4px] font-medium">{product_selected.title}</h1>
            <span className={itemAddedtoCart? `hidden` : `flex lg:gap-2 gap-1`}>
              <Stack spacing={1}>
                <Rating value={product_selected.rating} precision={0.5}/>
              </Stack>
              <p>({product_selected.rating})</p>
            </span>
          </div>
          <h1 className="font-Urbanist xl:text-6xl lg:text-4xl text-3xl font-bold leading-[76.8px]">${product_selected.price}</h1>
          <p className="w-full h-[max-content] font-Urbanist font-[400] xl:text-[17px] lg:text-[15px] text-[10px] leading-[16.8px] text-[#575757]">{product_selected.description}</p>
          <div className="w-full lg:h-[78px] h-[50px] flex xl:gap-10 gap-20">
            <div className="w-[50%] h-full flex flex-col xl:gap-3 lg:gap-2 gap-1">
              <p className="font-Urbanist font-[500] xl:text-2xl lg:text-xl text-[16px] leading-[26.6px">Color:</p>
              <div className="xl:w-[232px] lg:w-[200px] w-[140px] xl:h-[40px] lg:h-[30px] h-[20px] flex lg:gap-2 gap-1">
                <span className={`${color_class} bg-[#8A1313]`}></span>
                <span className={`${color_class} bg-[#317E07]`}></span>
                <span className={`${color_class} bg-[#8C7127]`}></span>
                <span className={`${color_class} bg-[#246FB5]`}></span>
                <span className={`${color_class} bg-[#000000]`}></span>
              </div>
            </div>
            <div className="xl:w-[286px] w-[30%] lg:h-[78px] h-[50px] flex flex-col xl:gap-3 lg:gap-2 gap-1">
              <p className="font-Urbanist font-[500] xl:text-2xl lg:text-xl text-[16px] leading-[26.6px">Qty:</p>
              <div className="w-[116px] xl:h-[40px] lg:h-[30px] h-[20px] flex justify-center items-center gap-2 font-Urbanist font-[500] xl:text-[16px] lg:text-[14px] text-[12px] leading-[19.2px]">
                <span className={qty_style} onClick={handleQtyCountDown}>-</span>
                {qtyValue ? qtyValue : "1"}
                <span className={qty_style} onClick={handleQtyCountUp}>+</span>
              </div>
            </div>
          </div>
          <div className="w-full xl:h-[40px] lg:h-[35px] h-[25px] flex justify-between">
            <button className={button_class} onClick={() => handleAddToCart(product_selected)}>Add To Cart</button>
            <button className={button_class} onClick={handleBuyNow}>Buy Now</button>
          </div>
          <div className="w-full xl:h-[57px] lg:h-[47px] h-[37px] border-t-[1px] border-[#CBCBCB] flex justify-between xl:py-5 lg:py-3 py-2 xl:text-[16px] lg:text-[14px] text-[12px]">
            <p>Brand {product_selected.storename}</p>
            <p>SKU 4564748</p>
          </div>
        </div>
      </section>
      <Product_review />
      <Related_product selectedProduct={selectedProduct} />

      {itemAddedtoCart && (
        <Add_to_CartModal />
      )}
    </div>
  );
};

export default Product_details;
