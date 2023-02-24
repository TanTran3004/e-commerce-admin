import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getBlogCategories = async () => {
  const response = await axios.get(`${baseUrl}blog-category/all-categories`);
  return response.data;
};

const bCategoryService = {
  getBlogCategories,
};
export default bCategoryService;
