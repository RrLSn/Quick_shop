import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/Reset_pass.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { pwd_Regex } from "../validation";
import Axios, { resetPassword } from "../Api/axios";
import AuthContext from "../context/AuthProvider";

const Reset_pass = () => {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const {message, setMessage} = useContext(AuthContext)
  // const [message, setMessage] = useState(null)
  const [pwdVisible, setPwdVisible] = useState(false);
  const [confirmPwdVisible, setConfirmPwdVisible] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()

  const {resetToken} = location.state
  const userRef = useRef()

  useEffect(() => {
    if(useRef.current){
      userRef.current.focus()
    }
  },[])


  useEffect(() => {
    const pwd_Res = pwd_Regex.test(newPassword)
    setValidPassword(pwd_Res)
    setMessage("")
  },[newPassword])

  const handleResetPassword = async(e) => {
    e.preventDefault()

    if(newPassword !== confirmPassword){
      setMessage("Password not match")
      return
    }

    try {
      const res = await Axios.post(
        resetPassword,
        JSON.stringify({resetToken, newPassword}),
        {
          headers: {"Content-Type": "application/json"}
        }
      )
      //check response and handle success or failure
      if(res.status === 200){
        setMessage("Password reset successfully")
        setTimeout(() => navigate('/auth/login'), 2000);
      }else{
        setMessage(res.data.message || 'failed to reset password')
      }
    } catch (error) {
      setMessage(`An error occurred while reseting your password ${error.response?.data?.message || error.message}`)
    }
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleResetPassword}>
        <img src="/svg/Logo.svg" alt="" />
        <div className={styles.reset_header}>
          <h1>Reset Password</h1>
          <p>Enter your new password here</p>
        </div>
        <div className={styles.reset_form}>
          <p className={message? "flex" : "hidden"}>{message}</p>
          <span>
            <img src="/svg/lock.svg" alt="" />
            <input 
            type={pwdVisible ? "text" : "password"}
            value={newPassword} 
            ref={userRef}
            autoComplete="off"
            required
            onChange={(e) => setNewPassword(e.target.value)} placeholder="Password" />
            <div
                  className={styles.pwdVisible}
                  onClick={() => setPwdVisible(!pwdVisible)}
                >
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
            ref={userRef} 
            autoComplete="off"
            id="confirmPassword"
            value={confirmPassword} 
            required
            onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Comfirm Password" />
            <div
                  className={styles.pwdVisible}
                  onClick={() => setConfirmPwdVisible(!confirmPwdVisible)}
                >
                  {!confirmPwdVisible ? (
                    <img src="/svg/pass_hide.svg" alt="" />
                  ) : (
                    <img src="/svg/pass_show.svg" alt="" />
                  )}
                </div>
          </span>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Reset_pass;
