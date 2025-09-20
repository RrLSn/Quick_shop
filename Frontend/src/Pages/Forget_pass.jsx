import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Forget_pass.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import Axios, { forgotPassUrl} from "../Api/axios";
import AuthContext from "../context/AuthProvider";

const Forget_pass = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [message, setMessage] = useState("")
  const {message, setMessage} = useContext(AuthContext)

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
        const res = await Axios.post(
          forgotPassUrl,
         JSON.stringify({email: email}),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        if(res.status === 200){
          setMessage(res.data.message)
          localStorage.setItem('otpToken', res?.data.otpToken)
          localStorage.setItem('email', email)
          navigate('/auth/OTPinput', {state: {email: email}})
        }
    } catch (error) {
      setMessage(error.res?.data.message || "An error occured sending otp")
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[var(---white)]">
      <div className={styles.wrapper}>
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
            {message ? <p className="flex text-red-500 xl:text-[18px] text-[12px]">{message}</p> : <p className="hidden"></p>}
            <form id="submit" name="submit" onSubmit={handleSubmit}>
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
                <button type="submit" disabled={isSubmitting && !message}>Submit</button>
              </div>
            </form>
      </div>
    </div>
  );
};

export default Forget_pass;
