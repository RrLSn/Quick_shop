import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useContext, useState } from "react";
import Axios, { logOutUrl } from "../Api/axios";

import AuthContext from "../context/AuthProvider";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  
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
    <nav>
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
    </nav>
  );
};

export default NavBar;
