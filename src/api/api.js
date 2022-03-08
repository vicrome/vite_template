// import router from "@/router";
import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

Api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status) {
      console.log("error");
      // localStorage.removeItem("user"); // should logout
      // router.push("login");
    }
  }
);

export default Api;
