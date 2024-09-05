import axios from "axios";

const Env = import.meta.env;

export const productApiUrl = `${Env.VITE_API_URL}/api/products`;
console.log(productApiUrl);
const userBaseUrl = `${Env.VITE_API_URL}/api/auth`;

export const regUrl = "/register";

export const loginUrl = "/login";

console.log(Env);

const Axios = axios.create({
  baseURL: userBaseUrl,
});

export default Axios;
