import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Axios, { forgotPassUrl } from "../Api/axios"

const OTPinput = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {OTP, email} = location.state
  const [otp, setOtp] = useState(new Array(4).fill(""))
  const [errMsg, setErrMsg] = useState("")
  const [counter, setCounter] = useState(59)
  const [disable, setDisable] = useState(true)

  const inputstyle = "w-[5rem] h-[5rem] rounded-xl text-[3rem] text-center border-2 focus:outline-blue-500"

  const handleVerificationSubmit = (e) => {
    e.preventDefault()
    const code = parseInt(otp.join(""))
    if(code === OTP){
      setErrMsg("")
      navigate("/auth/resetPassword")
    } else if(otp === undefined){
      setErrMsg("input verification code")
    }else{
      setErrMsg("Invalid verification Code")
    }
  }

  const handleChange = (el, index) => {
    setErrMsg("")
    if(isNaN(el.value)) return false
    setOtp([...otp.map((data, i) => (i===index? el.value : data))])
    if(el.nextSibling){
      el.nextSibling.focus()
    }
  }

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(timer)
        if(lastTimerCount <= 1) setDisable(false)
          if(lastTimerCount <= 1) return lastTimerCount
        return lastTimerCount - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [disable])

  const handleResendOTP = async(e) => {
    e.preventDefault()
    if (disable) return;
    try {
      const res = await Axios.post(
        forgotPassUrl,
        {OTP: OTP, email: email},
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
      )
      if(res.status === 200){
        setDisable(true)
        alert("otp sent")
        setCounter(59)
    
      }
    } catch (error) {
      setErrMsg(error.response?.data.message || "An error occurred sending otp")
    }
  }

  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form className="w-[40%] h-[60%] border-2 rounded-xl flex flex-col m-auto items-center gap-10 py-6" onSubmit={handleVerificationSubmit}>
        <div className="w-[100%] text-center">
          <h1 className="text-[2rem] font-bold">Email Verification</h1>
          <p>We sent a code to your email {email}</p>
        </div>
        {errMsg? <p className="text-red-600 text-2xl">{errMsg}</p>: <p className="hidden"></p>}
        <div className="w-[100%] h-[max-content] flex gap-5 justify-center">
          {
            otp.map((data, index) => {
              return(
              <input 
              type="text" 
              className={inputstyle} 
              maxLength={1} 
              value={data} 
              key={index} 
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()} />)
            })
          }
        </div>
        <div>
        <button className="w-[20rem] h-[3rem] rounded-md">VERIFY</button>

        <span className="gap-2 flex justify-center">
          <p>Didn&lsquo;t receive code?</p>
          <a className={disable ? "text-gray-600 cursor-none" : "text-blue-600 cursor-pointer underline hover:text-blue-800"} onClick={handleResendOTP}>
            {disable? `Resend OTP in ${counter}s` : "Resend OTP"}
          </a>
        </span>
        </div>
      </form>
    </section>
  )
}

export default OTPinput