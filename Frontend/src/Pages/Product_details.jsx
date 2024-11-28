import { useContext, useState } from "react";
import styles from "../styles/Product_details.module.css";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import Related_product from "../component/Related_product";
import { Rating, Stack } from "@mui/material"
import Product_review from "../component/Product_review";
import Add_to_CartModal from "../component/Add_to_CartModal";


  const color_class = "w-[32px] h-[32px]"
  const button_class = "w-[290px] h-[100%] flex justify-center items-center border-[1px] font-Urbanist font-[500] text-[#575757] text-[18px] leading-[21.6px] bg-[#ffffff] hover:bg-[#F24810] hover:text-[#ffffff]"
  const qty_style = "w-[40px] h-[40px] bg-[#EEEEEE] flex justify-center items-center"

const Product_details = () => {
  

  const {
    selectedProduct, 
    products, 
    setItemsInCart, 
    itemsInCart, 
    itemAddedtoCart, 
    setItemAddedtoCart, 
    cartItems, 
    setCartItems} = useContext(ProductContext)

  const [selectedImage, setSelectedImage] = useState(null)
  const [qtyValue, setQtyValue] = useState(1)
  

  const product_selected = products.find((products) => products._id === selectedProduct)

  const handleSelectedImageToShow = (index) => {
    setSelectedImage(index)
  }

  const handleQtyCountUp = () => {
    setQtyValue(qtyValue + 1)
  }

  const handleQtyCountDown = () => {
    if(qtyValue > 0){
      setQtyValue(qtyValue - 1)
    }
  }

  const handleAddToCart = (product_selected) => {
    setItemAddedtoCart(true)
    setItemsInCart(itemsInCart + 1)
    setCartItems((prevCartItems) => {
      const existingProductInCart = prevCartItems.find((item) => item._id === product_selected._id)

      if(existingProductInCart){
        return prevCartItems.map((item) => 
          item._id === product_selected._id ?
          {...item, quantity: item.quantity + qtyValue} :
          item
        )
      } else{
        return [prevCartItems, {...product_selected, quantity: qtyValue}]
      }
    } )
    console.log(cartItems.quantity)
    }
    
  return (
    <div className={styles.wrapper}>
      <Add_to_CartModal itemAddedtoCart={itemAddedtoCart} setItemAddedtoCart={setItemAddedtoCart} /> 
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
          <div className="w-full h-[75px] flex flex-col mb-3 gap-[12px]">
            <h1 className="font-Urbanist text-[32px] leading-[38.4px] font-[500]">{product_selected.title}</h1>
            <span className={itemAddedtoCart? `hidden` : `flex gap-2`}>
              <Stack spacing={1}>
                <Rating value={product_selected.rating} precision={0.5}/>
              </Stack>
              <p>({product_selected.rating})</p>
            </span>
          </div>
          <h1 className="font-Urbanist font-[500] text-[64px] leading-[76.8px]">${product_selected.price}</h1>
          <p className="w-full h-[max-content] font-Urbanist font-[400] text-[14px] leading-[16.8px] text-[#575757]">{product_selected.description}</p>
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
            <div className="w-[286px] h-[78px] flex flex-col gap-[12px]">
              <p className="font-Urbanist font-[500] text-[22px] leading-[26.6px">Qty:</p>
              <div className="w-[116px] h-[40px] flex justify-center items-center gap-[8px] font-Urbanist font-[500] text-[16px] leading-[19.2px]">
                <span className={qty_style} onClick={handleQtyCountDown}>-</span>
                {qtyValue}
                <span className={qty_style} onClick={handleQtyCountUp}>+</span>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[42px] flex gap-[32px]">
            <button className={button_class} onClick={() => handleAddToCart(product_selected)}>Add To Cart</button>
            <button className={button_class}>Buy Now</button>
          </div>
          <div className="w-full h-[57px] border-t-[1px] border-[#CBCBCB] flex justify-between py-[20px]">
            <span className="flex gap-2">Brand <p>{product_selected.storename}</p></span>
            <span className="flex gap-2">SKU <p>4564748</p></span>
          </div>
        </div>
      </section>
      <Product_review />
      <Related_product selectedProduct={selectedProduct} />
    </div>
  );
};

export default Product_details;
