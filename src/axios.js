import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      console.log(error);
    }
  };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       await refreshToken();
  //     }
  //     config.headers.Authorization = `Bearer ${token}`;

  //     return config;
  //   },
  //   (error) => {
  //     console.log(error);
  //     return Promise.reject(error);
  //   }
  // );

  useEffect(() => {
    refreshToken();
  }, [token, expire]);

  return [token];
};

export default useAuth;
