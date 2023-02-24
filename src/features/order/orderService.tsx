import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getOrders = async () => {
  const response = await axios.get(`${baseUrl}user/get-orders`);
  return response.data;
};
const orderService = {
  getOrders,
};
export default orderService;
