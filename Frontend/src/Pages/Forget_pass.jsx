import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Forget_pass.module.css";
import { useEffect, useRef, useState } from "react";
import Axios, { forgotPassUrl} from "../Api/axios";
// import axios from "axios";

const Forget_pass = () => {
  const [email, setEmail] = useState("")
  const [errMssg, setErrMsg] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const userRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(useRef.current){
      userRef.current?.focus()
    }
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const OTP = Math.floor(Math.random() * 9000 + 1000)
        const res = await Axios.post(
          forgotPassUrl,
         {OTP: OTP, email: email},
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        if(res.status === 200){
          setTimeout(() => {
            navigate('/auth/OTPinput', {state: {OTP : OTP, email: email}})
          }, 1000)
        }
   
    } catch (error) {
      setErrMsg(error.response?.data.message || "An error occured sending otp")
    }
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} >
        <img src="/svg/Logo.svg" alt="" />

        <div className={styles.rem_login}>
          <h1>Forgot Password</h1>
          <span>
            <p>Remeber your password?</p>
            <p>
              <Link to="/auth/login">Login here</Link>
            </p>
          </span>
        </div>
        {errMssg ? <p className="flex">{errMssg}</p> : <p className="hidden"></p>}
        <div className={styles.form_fill}>
          <div className={styles.input_mail}>
            <span>
              <img src="/svg/mailIcon.svg" alt="" />
              <input 
               type="text" 
               required
               id="email"
               autoComplete="on"
               placeholder="email" 
               ref={userRef} 
               value={email} 
               onChange={(e) => setEmail(e.target.value)} />
            </span>
            <p>Password reset link will be sent to your email.</p> 
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forget_pass;
