import axios from "axios";

axios.defaults.withCredentials = true;

const Env = import.meta.env;

//Product Auth
export const productApiUrl = `${Env.VITE_API_URL}/api/products`;

//User Auth
const userBaseUrl = `${Env.VITE_API_URL}/api/auth`;

export const regUrl = "/register";
export const loginUrl = "/login";
export const logOutUrl = "/logout";
export const forgotPassUrl = "/forget_password"
export const resend_otp = "/resend_otp"
export const verify_otp = "/verify_otp"
export const resetPassword = "/resetPassword"
export const updatePassword = "/updatePassword"
export const updateUserInfo = '/updateUserInfo'
export const updateUserDeliveryInfo = "/userDeliveryInfo"
export const userGoogleAuth = "/google/callback"

const Axios = axios.create({
  baseURL: userBaseUrl,
});


export default Axios;
