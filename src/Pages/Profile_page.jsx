import styles from "../styles/Profile_page.module.css";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";

const Profile_page = () => {
  const { auth } = useContext(AuthContext);
  return (
    <section className={styles.wrapper}>
      <div className={styles.header_div}>
        <h1>Profile</h1>
        <span>
          <p>Home</p>/<p>Dashboard</p>/<p>Profile</p>
        </span>
      </div>
      <main>
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
            <span></span>
            <span></span>
            <span></span>
            <button>Save Changes</button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Profile_page;
