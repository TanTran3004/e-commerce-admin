import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getBlogs = async () => {
  const response = await axios.get(`${baseUrl}blog/all-blogs`);
  return response.data;
};

const blogService = {
  getBlogs,
};
export default blogService;
