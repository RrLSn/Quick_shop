import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useContext, useState } from "react";
import Axios, { logOutUrl } from "../Api/axios";

import AuthContext from "../context/AuthProvider";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const [smModal, setSmModal] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const {itemsInCart} = useContext(CartContext)

  const navigate = useNavigate()
  const {auth, setAuth, drop, setDrop, loggedIn, setLoggedIn} = useContext(AuthContext)

  const handleLogOut = async () => {
    try {
      await Axios.get(logOutUrl, {
        withCredentials: true
      })
      setAuth();
      localStorage.clear();
      navigate("/")
      setDrop(false)
      setLoggedIn(false)
      
    } catch (error) {
      setErrMsg({message: "Logout failed", error})
    }
  };

  const handleToCart = () => {
    if(!auth){
      navigate("/auth/login")
    }
    else{
      navigate("/shopping_cart")
    }
  }

  return (
    <nav className="w-full h-[max-content] md:p-0 p-2">
      <section>
        <Link to="/">
          <img src="/svg/Logo.svg" alt="" className={styles.logo} />
        </Link>
        <span className={styles.barText}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="">
            <p>Female</p>
          </Link>
          <p>Male</p>
          <Link to="/shop"><p>Shop</p></Link>
        </span>
        <div>
          <span className={styles.cartUser}>
            <div className={styles.cart} onClick={handleToCart}>
              <img src="/svg/CartIcon.svg" alt="Icon" className="xl:w-[35px] xl:h-[30px] md:w-[25px] md:h-[15px]" />
              <div>{itemsInCart}</div>
            </div>
            <div className=" w-[max-content] gap-[4px] flex items-center cursor-pointer" onClick={() => setDrop(!drop)}>
              <img src="/svg/UserIcon.svg" alt="" className="xl:w-[35px] xl:h-[35px] md:w-[25px] md:h-[15px]" />
              <div>
                {drop ? (
                  <img src="/svg/ChevronUp.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px] w-[15px] h-[10px]" />
                ) : (
                  <img src="/svg/ChevronDown.svg" alt="" className="xl:w-[25px] xl:h-[20px] lg:w-[20px] lg:h-[15px]  w-[15px] h-[10px]" />
                )}
              </div>
            </div>
          </span>
          {
            !auth && !loggedIn ? 
          <span className={drop ? styles.drop_modal : "hidden"}>
            <p  className="cursor-pointer" onClick={() => setDrop(false)}>
              <Link to="/auth/sign_up">Sign up</Link>
            </p>
            <p  className="cursor-pointer" onClick={() => setDrop(false)}>
              <Link to="/auth/login">Login</Link>
            </p>
          </span> :
        <span className={drop ? styles.drop_modal : "hidden"}>
          <p onClick={() => setDrop(false)}>
            <Link to="/dashboard/profile">Profile</Link>
          </p>
          <p  className="cursor-pointer" onClick={() => setDrop(false)}>
            <Link to="/dashboard">Dashboard</Link>
          </p>
          <p className="cursor-pointer"  onClick={handleLogOut}>
            <Link to="">Signout</Link>
          </p>
        </span>
          }
        </div>
      </section>
      <div className="w-full flex justify-between items-center md:hidden">
        <Link to="/">
          <img src="/svg/Logo.svg" alt="" className={styles.logo} />
        </Link>
        <div className="w-[22%] h-full flex justify-between items-center">
          <div className={styles.cart} onClick={handleToCart}>
              <img src="/svg/CartIcon.svg" alt="Icon" className="xl:w-[35px] xl:h-[30px] md:w-[25px] md:h-[15px]" />
              <div>{itemsInCart}</div>
            </div>
        <button 
          className="w-[35px] h-[35px] md:hidden flex flex-col justify-center gap-1 p-1 relative"
          onClick={() => setSmModal(!smModal)}>
          <span className={`w-full h-[0.2rem] bg-black ${!smModal && "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 -rotate-45"}`}></span>
          <span className={`w-full h-[0.2rem] bg-black ${!smModal && "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rotate-45"}`}></span>
          <span className={`w-full h-[0.2rem] bg-black ${!smModal && "hidden"}`}></span>
        </button>
        </div>
      </div>
      {!smModal && (
        <div className="md:hidden w-[75%] h-screen fixed bg-[var(---white)] z-10 ml-[6rem] -mt-[3rem] py-4 shadow-2xl flex flex-col items-end px-4 gap-5">
        <button 
          className="w-[35px] h-[35px] md:hidden flex flex-col justify-center gap-1 p-1 relative"
          onClick={() => setSmModal(!smModal)}>
          <span className="w-full h-[0.2rem] bg-black absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
          <span className="w-full h-[0.2rem] bg-black absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
        </button>
        <div className="w-full h-[30rem]">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="">
            <p>Female</p>
          </Link>
          <p>Male</p>
          <Link to="/shop"><p>Shop</p></Link>
        </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
