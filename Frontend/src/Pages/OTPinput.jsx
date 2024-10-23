import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const OTPinput = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {OTP, email} = location.state
  const [otp, setOtp] = useState(new Array(4).fill(""))
  const [errMsg, setErrMsg] = useState("")

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
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form className="w-[50%] h-[60%] border-2 rounded-xl py-5 flex m-auto items-center" onSubmit={handleVerificationSubmit}>
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
        <button className="w-[12rem] h-[3rem] rounded-sm">Verify</button>
        <p>Didn't receive code? Resend OTP</p>
      </form>
    </section>
  )
}

export default OTPinput