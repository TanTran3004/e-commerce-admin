import axios from "axios";
import { LoginValues } from "../../utils/type";
import { baseUrl } from "../../utils/base_url";

const login = async (userData: LoginValues) => {
  const response = await axios.post(`${baseUrl}user/login-admin`, userData);
  if (response) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};
export default authService;
