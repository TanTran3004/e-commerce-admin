import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getProductCategories = async () => {
  const response = await axios.get(`${baseUrl}category/all-categories`);
  return response.data;
};

const pCategoryService = {
  getProductCategories,
};
export default pCategoryService;
