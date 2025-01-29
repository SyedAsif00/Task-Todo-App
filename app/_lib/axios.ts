"use client";
import defaultAxios from "axios";

// axios interceptor
const axios = defaultAxios.create({
  baseURL: "",

  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axios;
