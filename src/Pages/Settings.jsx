import styles from "../styles/Settings.module.css";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Settings</h1>
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
            <Link to="/dashboard/settings">Profile</Link>
          </p>
        </span>
      </div>
      <div className={styles.updates}>
        <div className={styles.update_pass}>
          <h1>Update Account Password</h1>
          <form id="update_pass" name="update_pass">
            <span>
              <img src="/svg/lock.svg" alt="" />
              <input
                type="password"
                placeholder="Current Password"
                id="password"
                autoComplete="off"
                value="{password}"
                required
                onChange=""
              />
            </span>
            <span>
              <img src="/svg/lock.svg" alt="" />
              <input
                type="password"
                placeholder="New Password"
                id="password"
                autoComplete="off"
                value="{password}"
                required
                onChange=""
              />
            </span>
            <button></button>
          </form>
        </div>
        <div className={styles.update_locatn}>
          <h1>Delivery Location</h1>
          <form id="update_locatn" name="update_locatn"></form>
        </div>
      </div>
    </section>
  );
};

export default Settings;
