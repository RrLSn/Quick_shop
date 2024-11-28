import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useContext, useState } from "react";
import Axios, { logOutUrl } from "../Api/axios";

import AuthContext from "../context/AuthProvider";
import { ProductContext } from "../context/ProductContext";

const NavBar = () => {
  
  const [errMsg, setErrMsg] = useState(null);
  const {itemsInCart} = useContext(ProductContext)

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

  return (
    <nav>
      <Link to="/" className={styles.logo}>
        <img src="/svg/Logo.svg" alt="" />
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
          <Link to="/shopping_cart">
            <div className={styles.cart}>
              <img src="/svg/CartIcon.svg" alt="Icon" />
              <div>{itemsInCart}</div>
            </div>
          </Link>
          <div className=" w-[58px] gap-[4px] flex items-center cursor-pointer" onClick={() => setDrop(!drop)}>
            <img src="/svg/UserIcon.svg" alt="" />
            <div>
              {drop ? (
                <img src="/svg/ChevronUp.svg" alt="" />
              ) : (
                <img src="/svg/ChevronDown.svg" alt="" />
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
