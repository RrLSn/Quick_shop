import styles from "../styles/Profile_page.module.css";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Profile_page = () => {
  const { auth } = useContext(AuthContext);
  return (
    <section className={styles.wrapper}>
      <div className={styles.header_div}>
        <h1>Profile</h1>
        <span>
          <p>
            <Link to="/">Home</Link>
          </p>
          /
          <p>
            <Link to="/dashboard">Dashboard</Link>
          </p>
          /
          <p>
            <Link to="/dashboard/profile">Profile</Link>
          </p>
        </span>
      </div>
      <div className={styles.main}>
        <div className={styles.Profile_details}>
          <span>
            <h1>Name</h1>
            <p>{auth?.fullname}</p>
          </span>
          <span>
            <h1>Email</h1>
            <p>{auth?.email}</p>
          </span>
          <span>
            <h1>Phone Number</h1>
            <p>{auth?.phone}</p>
          </span>
        </div>
        <div className={styles.update_profile}>
          <h1>Update Profile</h1>
          <form name="update" id="update">
            <span className={styles.input}>
              <img src="/svg/contactIcon.svg" alt="" />
              <input type="text" placeholder="Full Name" />
            </span>
            <span className={styles.input}>
              <img src="/svg/mailIcon.svg" alt="" />
              <input type="text" placeholder="Email" />
            </span>
            <span className={styles.input}>
              <img src="/svg/phoneIcon.svg" alt="" />
              <input type="text" placeholder="Phone" />
            </span>
            <button>Save Changes</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile_page;
