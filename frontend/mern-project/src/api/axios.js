// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://mern-auth-project-backend-48fe.onrender.com"
});

export default API;
