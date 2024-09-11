// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Forget_pass.module.css";
import { useEffect, useRef, useState } from "react";
import { email_Regex } from "../validation";
import Axios, { resetPassUrl } from "../Api/axios";

const Forget_pass = () => {
  const [email, setEmail] = useState("")
  const [errMssg, setErrMsg] = useState(null)
  const [success, setSuccess] = useState()

  const userRef = useRef()
  const errRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if(useRef.current){
      userRef.current.focus()
    }
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        const res = await Axios.post(
          resetPassUrl,
          JSON.stringify({email: email}),
          {headers: {"Content-Type": "application/json"}
        }
        )
        if(res.status === 200){
          navigate('/')
          setSuccess(res)
        }
   
    } catch (error) {
      setErrMsg(error.response?.data.message || "An error occured")
      errRef.current.focus()
    }
  }

  console.log(errMssg)

  return (
    <div className={styles.wrapper}>
      <form action="">
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
        <form onSubmit={handleSubmit} className={styles.form_fill}>
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
          <button>Submit</button>
        </form>
      </form>
    </div>
  );
};

export default Forget_pass;
