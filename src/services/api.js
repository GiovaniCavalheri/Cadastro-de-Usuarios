import axios from "axios";

const api = axios.create({
  baseURL: "https://user-registration-api-0p47.onrender.com",
});

export default api 