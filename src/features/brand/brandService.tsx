import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getBrands = async () => {
  const response = await axios.get(`${baseUrl}brand/all-brands`);
  return response.data;
};

const brandService = {
  getBrands,
};
export default brandService;
