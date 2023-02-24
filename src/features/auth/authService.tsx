import axios from "axios";
import { LoginValues } from "../../utils/type";
import { baseUrl } from "../../utils/base_url";
const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
    Accept: "application/json",
  },
};
const login = async (userData: LoginValues) => {
  const response = await axios.post(`${baseUrl}user/login-admin`, userData);
  if (response) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  console.log(getTokenFromLocalStorage);
  const response = await axios.get(`${baseUrl}user/get-orders`, config);
  return response.data;
};
const authService = {
  login,
  getOrders,
};
export default authService;
