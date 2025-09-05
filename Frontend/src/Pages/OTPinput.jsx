import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Axios, { resend_otp, verify_otp } from "../Api/axios"

const OTPinput = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {email} = location.state
  const [otp, setOtp] = useState(new Array(4).fill(""))
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(59)
  const [disable, setDisable] = useState(true)

  const inputstyle = "lg:w-[5rem] lg:h-[4.5rem] w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] xl:w-[8rem] xl:h-[8rem] rounded-xl lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] xl:text-[5rem] text-center border-2 focus:outline-blue-500"

  const handleVerificationSubmit = async(e) => {
    e.preventDefault()
    const OTP = parseInt(otp.join(""))
    
   //Retrieve the otpToken
   const otpToken = localStorage.getItem('otpToken')
   const email = localStorage.getItem('email')

   try {
    const res = await Axios.post(
      verify_otp,
      JSON.stringify({OTP, otpToken, email}),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    )
    if(res.status === 200){
      const resetToken = res?.data.resetToken
      setMessage(res?.data.message)
      navigate("/auth/resetPassword", {state: {resetToken: resetToken}})
    }
   } catch (error) {
    setMessage(error.res?.data.message || `An error occurred!`)
   }
  }

  const handleChange = (el, index) => {
    setMessage("")
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
        resend_otp,
        JSON.stringify({email: email}),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
      )
      if(res.status === 200){
        setMessage(res?.data.message)
        localStorage.setItem('otpToken', res.data.otpToken)
        setDisable(true)
        setCounter(59)
      }
    } catch (error) {
      setMessage(error.response?.data.message || "An error occurred sending otp")
    }
  }

  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form className="xl:w-[40%] md:w-[60%] w-[80%] h-[45%] md:h-[45%] xl:h-[40%] border-2 rounded-xl flex flex-col m-auto items-center justify-center xl:gap-10 lg:gap-4 gap-2 xl:py-6 lg:py-2" onSubmit={handleVerificationSubmit}>
        <div className="w-[full text-center">
          <h1 className="lg:text-[1.5rem] md:text-[20px] text-[16px] xl:text-5xl font-bold">Email Verification</h1>
          <p className="xl:text-2xl lg:text-[12px] text-[10px]">We sent a code to your email {email}</p>
        </div>
        {message? <p className="text-red-600 text-2xl">{message}</p>: <p className="hidden"></p>}
        <div className="w-full h-[max-content] flex gap-5 justify-center bg-red-400 xl:py-4 py-2">
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
        <button className="xl:w-[20rem] lg:w-[15rem] md:w-[10rem] w-[6rem] md:h-[2.5rem] h-[2rem] lg:h-[3rem] xl:h-[5rem] rounded-md xl:text-2xl font-bold md:text-[14px] text-[12px] m-auto">VERIFY</button>

        <span className="gap-2 flex justify-center xl:text-2xl md:text-[14px] text-[12px]">
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