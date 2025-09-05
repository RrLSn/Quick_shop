import { createContext, useState, useEffect } from "react";
import Axios, { userGoogleAuth } from "../Api/axios";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)
  const [message, setMessage] = useState("")
  const [drop, setDrop] = useState(false);
  const OTP = Math.floor(Math.random() * 9000 + 1000)

  useEffect(() => {
  const userData = localStorage.getItem("userData");
  const token = localStorage.getItem("token");
  if (userData && token) {
    setAuth({ ...JSON.parse(userData), token });
  }
}, []);


  const googleUserAuth = async() => {
    //Trigger the google login flow
    window.open(userGoogleAuth, "_self")
    }

    const handleGoogleUserAuth = async() => {
      try {
        const res = await Axios.get(
          userGoogleAuth,
          {
            headers: {
              "Content-Type": "application/json" 
            },
            withCredentials: true
          }
        )
        const data = await res.json()
        if(res.status === 200){
          const fullname = data.fullname
          const email = data.email
          setAuth({fullname, email})
          // navigate("/dashboard")
          localStorage.setItem("userData", JSON.stringify({fullname, email}))
        }
      } catch (error) {
        setMessage()
      }
    }

  return (
    <AuthContext.Provider value={{ auth, setAuth, drop, setDrop, OTP, loggedIn,setLoggedIn, googleUserAuth, handleGoogleUserAuth, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthContext;
