import axios from "axios";

export const productApiUrl = "http://localhost:8080/api/products";
const userBaseUrl = "http://localhost:8080/api/auth";

export const regUrl = "/register";

export const loginUrl = "/login";

export default axios.create({
  baseURL: userBaseUrl,
});
