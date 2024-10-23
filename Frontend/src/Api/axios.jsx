import axios from "axios";

axios.defaults.withCredentials = true;

const Env = import.meta.env;

export const productApiUrl = `${Env.VITE_API_URL}/api/products`;

const userBaseUrl = `${Env.VITE_API_URL}/api/auth`;

export const regUrl = "/register";

export const loginUrl = "/login";

export const logOutUrl = "/logout";

export const forgotPassUrl = "/forget_password"

export const resetPassUrl = "/resetPassword"

const Axios = axios.create({
  baseURL: userBaseUrl,
});


export default Axios;
