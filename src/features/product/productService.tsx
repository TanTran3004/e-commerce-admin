import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { baseUrl } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${baseUrl}product/all-products`);
  return response.data;
};
const createProduct = async (productData: any) => {
  const response = await axios.post(
    `${baseUrl}product/create-product`,
    productData,
    config
  );
  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};
export default productService;
