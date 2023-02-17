import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getUsers = async () => {
  console.log(`${baseUrl}user/all-users`);
  const response = await axios.get(`${baseUrl}user/all-users`);
  return response.data;
};

const customerService = {
  getUsers,
};
export default customerService;
