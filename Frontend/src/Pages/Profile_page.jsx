import { useEffect, useRef, useState } from "react";
import styles from "../styles/Profile_page.module.css";
import { Link } from "react-router-dom";
import { email_Regex, name_Regex, phone_Regex} from "../validation";
import Axios, { updateUserInfo } from "../Api/axios";

const Profile_page = () => {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const token = userData.token

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const userRef = useRef()

  useEffect(() => {
    if(useRef.current){
      userRef.current.focus()
    }
  }, [])

  useEffect(() => {
    email_Regex.test(email)
    phone_Regex.test(phone)
    name_Regex.test(fullname)
  }, [fullname, email, phone])

  const handleUpdateUserInfo = async(e) => {
    e.preventDefault()
    try {
      const res = await Axios.put(
        updateUserInfo,
        JSON.stringify({fullname,email, phone}),
        {
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
          }
        }
      )
      if(res.status === 200){
        setMessage("Deatails updated successfully")
      } else{
        setMessage(res.data.message || "failed to update details")
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.response?.data?.message || error.message}`)
    }
  }
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.header_div}>
        <h1>Profile</h1>
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
            <Link to="/dashboard/profile">Profile</Link>
          </p>
        </span>
      </div>
      <div className={styles.main}>
        <div className={styles.Profile_details}>
          <span>
            <h1>Name</h1>
            <p>{userData?.fullname}</p>
          </span>
          <span>
            <h1>Email</h1>
            <p>{userData?.email}</p>
          </span>
          <span>
            <h1>Phone Number</h1>
            <p>{userData?.phone}</p>
          </span>
        </div>
        <div className={styles.update_profile}>
          <h1>Update Profile</h1>
          <form name="update" id="update" onSubmit={handleUpdateUserInfo}>
          <p className={message ? "flex" : "hidden"}>{message}</p>
            <span className={styles.input}>
              <img src="/svg/contactIcon.svg" alt="" />
              <input 
              type="text" 
              placeholder="Full Name" 
              id="fullName" 
              autoComplete="off" 
              value={fullname}
              onChange={(e) => setFullname(e.target.value)} />
            </span>
            <span className={styles.input}>
              <img src="/svg/mailIcon.svg" alt="" />
              <input 
              type="text" 
              placeholder="Email" 
              id="Email" 
              autoComplete="off" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </span>
            <span className={styles.input}>
              <img src="/svg/phoneIcon.svg" alt="" />
              <input 
              type="text" 
              placeholder="Phone" 
              id="Phone" 
              autoComplete="off" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
            </span>
            <button>Save Changes</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile_page;
