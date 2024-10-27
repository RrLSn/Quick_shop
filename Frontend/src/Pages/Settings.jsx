import { useState } from "react";
import styles from "../styles/Settings.module.css";
import { Link } from "react-router-dom";
import { states } from "../data";
import Axios, { resetPassword } from "../Api/axios";

const Settings = () => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const [confirmPwdVisible, setConfirmPwdVisible] = useState(false);

  const [currentpassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("")

  const token = localStorage.getItem("token")

  const handleResetPassword = async(e) => {
    e.preventDefault()
    try {
      const res = await Axios.post(
        resetPassword,
        JSON.stringify({currentpassword, newPassword}),
        {
          headers: {
            "Content-Type": "application/json", 
            "Authorization" : `Bearer ${token}`
          }
        }
      )
      if(res.status === 200){
        setMessage("Password updated successfully")
      }else{
        setMessage(res.data.message || "this is the error")
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.res?.data?.message || error.message}`)
    }
  }
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
          <form id="update_pass" name="update_pass" onSubmit={handleResetPassword}>
            <p className={message ? "flex" : "hidden"}>{message}</p>
            <span>
              <img src="/svg/lock.svg" alt="" />
              <input
                type={pwdVisible ? "text" : "password"}
                placeholder="Current Password"
                id="password"
                //   ref={userRef}
                autoComplete="off"
                value={currentpassword}
                required
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div className={styles.pwdVisible} onClick={() => setPwdVisible(!pwdVisible)}>
                {!pwdVisible ? (
                  <img src="/svg/pass_hide.svg" alt="" />
                ) : (
                  <img src="/svg/pass_show.svg" alt="" />
                )}
              </div>
            </span>
            <span>
              <img src="/svg/lock.svg" alt="" />
              <input
                type={confirmPwdVisible ? "text" : "password"}
                placeholder="New Password"
                id="password"
                //   ref={userRef}
                autoComplete="off"
                value={newPassword}
                required
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className={styles.pwdVisible} onClick={() => setConfirmPwdVisible(!confirmPwdVisible)}>
                {!confirmPwdVisible ? (
                  <img src="/svg/pass_hide.svg" alt="" />
                ) : (
                  <img src="/svg/pass_show.svg" alt="" />
                )}
              </div>
            </span>
            <button>Save Changes</button>
          </form>
        </div>
        <div className={styles.update_locatn}>
          <h1>Delivery Location</h1>
          <form id="update_locatn" name="update_locatn">
            <div className={styles.custom_dropdown}>
              <select>
                <option value="">Select Country</option>
                <option value="">Nigeria</option>
              </select>
            </div>
            <div className={styles.custom_dropdown}>
              <select>
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option value={state} key={index}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <span>
              <img src="/svg/location.svg" alt="" />
              <input type="text" placeholder="Street Address" />
            </span>
            <button>Save Changes</button>
          </form>
        </div>
      </div>
      <div className={styles.card}>
        <div>
          <h1>Remember Checkout Card</h1>
          <div className={styles.toggle_switch}>
            <input type="checkbox" name="toggle" id="toggle" />
            <label></label>
          </div>
        </div>
        <span>
          <img src="" alt="" />
          <p>7456 **** **** **17</p>
        </span>
      </div>
    </section>
  );
};

export default Settings;
