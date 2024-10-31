import { useEffect, useRef, useState } from "react";
import styles from "../styles/Settings.module.css";
import { Link } from "react-router-dom";
import { states } from "../data";
import Axios, { updatePassword, updateUserDeliveryInfo } from "../Api/axios";
import { pwd_Regex } from "../validation";

const Settings = () => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const [confirmPwdVisible, setConfirmPwdVisible] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [address, setAddress] = useState("")

  const [message, setMessage] = useState("")
  const [deliveryInfoMsg, setDeliveryInfoMsg] = useState("")

  const userData = JSON.parse(localStorage.getItem("userData"))
  const token = userData.token

  const userRef = useRef()

  useEffect(() => {
    if(useRef.current){
      userRef.current.focus()
    }
  },[])

  useEffect(() => {
    pwd_Regex.test(newPassword)
  }, [newPassword])

  const handleUpdatePassword = async(e) => {
    e.preventDefault()
    try {
      const res = await Axios.put(
        updatePassword,
        JSON.stringify({currentPassword, newPassword}),
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
        setMessage(res.data.message || "Failed to update password")
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.response?.data?.message || error.message}`)
    }
  }

  const handleDeliveryUpdates = async(e) => {
    e.preventDefault()
    try {
      const res = await Axios.put(
        updateUserDeliveryInfo,
        JSON.stringify({country, state, address}),
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }
      )

      if(res.status === 200){
        setDeliveryInfoMsg(`Delivery Information updated successfully`)
      }else{
        setDeliveryInfoMsg(res.data.message || "failed to updated delivery information")
      }
    } catch (error) {
      setDeliveryInfoMsg(`An error occurred: ${error.response?.data?.message || error.message}`)
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
          <form id="update_pass" name="update_pass" onSubmit={handleUpdatePassword}>
            <p className={message ? "flex" : "hidden"}>{message}</p>
            <span>
              <img src="/svg/lock.svg" alt="" />
              <input
                type={pwdVisible ? "text" : "password"}
                placeholder="Current Password"
                id="currentPassword"
                  ref={userRef}
                autoComplete="off"
                value={currentPassword}
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
                id="newPassword"
                  ref={userRef}
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
          <form id="update_locatn" name="update_locatn" onSubmit={handleDeliveryUpdates}>
          <p className={deliveryInfoMsg ? "flex" : "hidden"}>{deliveryInfoMsg}</p>
            <div className={styles.custom_dropdown}>
              <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select Country</option>
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
            <div className={styles.custom_dropdown}>
              <select value={state} onChange={(e) => setState(e.target.value)}>
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
              <input 
              type="text" 
              placeholder="Street Address" 
              autoComplete="off" 
              ref={userRef} 
              value={address}
              onChange={(e) => setAddress(e.target.value)} />
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
