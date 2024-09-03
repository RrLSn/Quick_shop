import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className={styles.logo}>
        <img src="/svg/Logo.svg" alt="" />
      </Link>
      <span className={styles.barText}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>Female</p>
        <p>Male</p>
        <p>Shop</p>
      </span>
      <span className={styles.cartUser}>
        <Link>
          <div className={styles.cart}>
            <img src="/svg/CartIcon.svg" alt="" />
            <p>0</p>
          </div>
        </Link>
        <div className=" w-[58px] gap-[4px] flex items-center">
          <img src="/svg/UserIcon.svg" alt="" />
          <img src="/svg/ChevronDown.svg" alt="" />
        </div>
      </span>
    </nav>
  );
};

export default NavBar;
