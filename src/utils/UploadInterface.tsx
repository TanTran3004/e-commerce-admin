export interface UploadState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
  images: string[];
}
export interface ImageState {
  url: string;
  public_id: string;
  asset_id: string;
}
