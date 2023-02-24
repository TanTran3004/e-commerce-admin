import axios from "axios";
import { baseUrl } from "../../utils/base_url";

const getColors = async () => {
  const response = await axios.get(`${baseUrl}color/all-colors`);
  return response.data;
};

const colorService = {
  getColors,
};
export default colorService;
