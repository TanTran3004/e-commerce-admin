import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${baseUrl}product/all-products`);
  return response.data;
};

const productService = {
  getProducts,
};
export default productService;