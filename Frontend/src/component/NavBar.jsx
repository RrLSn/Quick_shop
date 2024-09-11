import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import { useContext, useState } from "react";
import Axios, { logOutUrl } from "../Api/axios";

import AuthContext from "../context/AuthProvider";

const NavBar = () => {
  
  const [errMsg, setErrMsg] = useState(null);
  // const [success, setSuccess] = useState(false);

  const navigate = useNavigate()
  const {auth, setAuth, drop, setDrop} = useContext(AuthContext)

  const handleLogOut = async () => {
    try {
      await Axios.get(logOutUrl, {
        withCredentials: true
      })
      localStorage.removeItem(auth)
      setAuth()
      navigate("/")
      setDrop(false)
      
    } catch (error) {
      setErrMsg({message: "Logout failed", error})
    }
  };

  const handleDropModal = () => {
    setDrop(!drop);
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
        <p>Shop</p>
      </span>
      <div>
        <span className={styles.cartUser}>
          <Link>
            <div className={styles.cart}>
              <img src="/svg/CartIcon.svg" alt="Icon" />
              <p>0</p>
            </div>
          </Link>
          <div className=" w-[58px] gap-[4px] flex items-center cursor-pointer" onClick={handleDropModal}>
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
          !auth ? 
          <span className={drop ? styles.drop_modal : "hidden"}>
          <p onClick={() => setDrop(false)}>
            <Link to="/auth/sign_up">Sign up</Link>
          </p>
          <p onClick={() => setDrop(false)}>
            <Link to="/auth/login">Login</Link>
          </p>
        </span> :
        <span className={drop ? styles.drop_modal : "hidden"}>
          <p onClick={() => setDrop(false)}>
          <Link to="/dashboard/profile">Profile</Link>
        </p>
        <p onClick={() => setDrop(false)}>
          <Link to="/dashboard">Settings</Link>
        </p>
        <p  onClick={handleLogOut}>
          <Link to="">Signout</Link>
        </p>
      </span>
        }
      </div>
    </nav>
  );
};

export default NavBar;
