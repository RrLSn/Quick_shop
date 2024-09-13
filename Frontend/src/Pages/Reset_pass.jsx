import { useParams } from "react-router-dom";
import styles from "../styles/Reset_pass.module.css";
import { useEffect, useRef, useState } from "react";
import { pwd_Regex } from "../validation";
import Axios from "../Api/axios";

const Reset_pass = () => {
  const {id, token} = useParams()
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [sucess, setSucess] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const userRef = useRef()
  const errRef = useRef()

  useEffect(() => {
    if(useRef.current){
      userRef.current.focus()
    }
  },[])

  useEffect(() => {
    const pwd_Res = pwd_Regex.test(newPassword)
    setValidPassword(pwd_Res)
    setErrMsg("")
  },[newPassword])

  const handleResetPassword = async(e) => {
    e.preventDefault()
    if(newPassword !== confirmPassword){
      setErrMsg("Password not match")
    }
    try {
      const res = await Axios.put(
        `/resetPassword/${id}/${token}`,
        JSON.stringify({password: newPassword}),
        {
          headers: {"Content-Type": "application/json"}
        }
      )
      const data = await res.json()
      if(res.status === 200){
        setSucess("Password reset successfully")
      }else{
        setErrMsg(data.message)
      }
    } catch (error) {
      setErrMsg("An error occurrd while reseting your password")
    }
  }
  console.log(id, token)
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleResetPassword}>
        <img src="/svg/Logo.svg" alt="" />
        <div className={styles.reset_header}>
          <h1>Reset Password</h1>
          <p>Enter your new password here</p>
        </div>
        <div className={styles.reset_form}>
          <span>
            <img src="/svg/lock.svg" alt="" />
            <input 
            type="password" 
            value={newPassword} 
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setNewPassword(e.target.value)} placeholder="Password" />
            <img src="/svg/pass_hide.svg" alt="" />
          </span>
          <span>
            <img src="/svg/lock.svg" alt="" />
            <input 
            type="password"
            ref={userRef} 
            autoComplete="off"
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Comfirm Password" />
            <img src="/svg/pass_hide.svg" alt="" />
          </span>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Reset_pass;
