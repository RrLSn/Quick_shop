import axios from "axios";

// export const productApiUrl = "http://localhost:8080/api/products";
// const userBaseUrl = "http://localhost:8080/api/auth";

// export const productApiUrl = `${process.env.REACT_APP_API_URL}/products`;
// console.log(productApiUrl);
// const userBaseUrl = `${process.env.REACT_APP_API_URL}/auth`;

export const productApiUrl = `${process.env.REACT_APP_API_URL}/api/products`;
const userBaseUrl = `${process.env.REACT_APP_API_URL}/api/auth`;

export const regUrl = "/register";

export const loginUrl = "/login";

export default axios.create({
  baseURL: userBaseUrl,
});
