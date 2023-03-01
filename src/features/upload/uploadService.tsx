import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const uploadImage = async (imageData: any) => {
  const response = await axios.post(
    `${baseUrl}upload/update-product-img`,
    imageData,
    config
  );

  return response.data;
};

const deleteImage = async (id: string): Promise<string[]> => {
  const deleteConfig: AxiosRequestConfig = {
    ...config,
    data: { id },
  };
  const response = await axios.delete(
    ` ${baseUrl}upload/delete-image/${id}`,
    deleteConfig
  );
  return response.data;
};
const uploadService = {
  uploadImage,
  deleteImage,
};

export default uploadService;
