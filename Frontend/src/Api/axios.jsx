import axios from "axios";

axios.defaults.withCredentials = true;

const Env = import.meta.env;

//Product Auth
export const productApiUrl = `${Env.VITE_API_URL}/api/products`;

//Cart Auth
const cartBaseUrl = `${Env.VITE_API_URL}/api/cart`;

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

export const Axios = axios.create({
  baseURL: userBaseUrl,
});

export const CartAxios = axios.create({
  baseURL: cartBaseUrl
})