import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import AuthContext from "../context/AuthProvider";
import axios from "../Api/axios";
import { loginUrl } from "../Api/axios";
import { pwd_Regex, email_Regex } from "../validation.jsx";
// import useLocalStorage from "../hooks/useLocalStorage.jsx";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [errMsg, setErrMsg] = useState(null);
  const [success, setSuccess] = useState(false);

  const [pwdVisible, setPwdVisible] = useState(false);

  useEffect(() => {
    if (useRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const pwd_Res = pwd_Regex.test(password);
    const email_Res = email_Regex.test(email);
    setValidPassword(pwd_Res);
    setValidEmail(email_Res);
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        loginUrl,
        JSON.stringify({ email: email, password: password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const token = res?.data.token;
      const fullname = res?.data.fullname;
      const phone = res?.data.phone;
      // const email = res?.data.email;
      localStorage.setItem("authToken", token);
      setAuth({ email, fullname, token, phone });
      setEmail("");
      setPassword("");
      setSuccess(true);
      navigate("/dashboard");
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("authToken", token);
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
    } catch (error) {
      setErrMsg(error.response?.data.message || "An error occurred");
      errRef.current.focus();
    }
  };

  const handlepwdValueClick = () => {
    setPwdVisible(!pwdVisible);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login_info}>
        <img src="/svg/Logo.svg" alt="" />
        <div className={styles.login_header}>
          <h1>Welcome Back!</h1>
          <p>
            Log In to your account using any of these method to explore more
            collection.
          </p>
          <div className={styles.login_socials}>
            <button>
              <img src="/svg/google.svg" alt="" />
              Google
            </button>
            <button>
              <img src="/svg/facebook_1.svg" alt="" />
              Facebook
            </button>
          </div>
        </div>
        <div className={styles.form_area}>
          <div className={styles.form_header}>
            <span className={styles.line}></span>
            <p>Or continue with email</p>
            <span className={styles.line}></span>
          </div>
          <p
            ref={errRef}
            className={errMsg ? styles.errMsg : "hidden"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form
            action=""
            id="login"
            name="login"
            className={styles.login_details}
            onSubmit={handleSubmit}
          >
            <div className={styles.form_fill}>
              <div className={styles.form_input}>
                <img src="/svg/mailIcon.svg" alt="" />
                <input
                  type="text"
                  placeholder="Email Address"
                  id="email"
                  ref={userRef}
                  autoComplete="on"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.form_input}>
                <img src="/svg/lock.svg" alt="" />
                <input
                  type={pwdVisible ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  ref={userRef}
                  autoComplete="off"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className={styles.pwdVisible}
                  onClick={handlepwdValueClick}
                >
                  {!pwdVisible ? (
                    <img src="/svg/pass_hide.svg" alt="" />
                  ) : (
                    <img src="/svg/pass_show.svg" alt="" />
                  )}
                </div>
              </div>
              <span className={styles.rem_pass}>
                <div>
                  <input type="checkbox" name="" id="" />
                  <p>Remember me</p>
                </div>
                <p>
                  <Link to="/auth/forgetPassword">Forgot Password?</Link>
                </p>
              </span>
            </div>
            <button
              disabled={!validEmail || !validPassword ? true : false}
              className={validEmail || validPassword ? "" : "bg-[#c6c1c1]"}
            >
              Login
            </button>
            <footer>
              <h1>Don&rsquo;t have an account?</h1>
              <p>
                <Link to="/auth/sign_up">Sign Up</Link>
              </p>
            </footer>
          </form>
        </div>
      </div>
      <div className={styles.carve}>
        <img src="/svg/loginImg.svg" alt="" />
      </div>
    </div>
  );
};

export default Login;
