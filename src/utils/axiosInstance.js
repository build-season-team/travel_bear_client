import axios from "axios";
import { BASE_URL, BASE_URL_DEV } from "../constants/base";

let headers = {};
const axiosInstance = axios.create({
  baseURL: BASE_URL_DEV,
  headers,
});

axiosInstance.interceptors.request.use(
   (config) => {
    const token =  localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export default axiosInstance;
