export interface UploadState {
  images: string[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}

export interface Image {
  public_id: string;
  url: string;
  asset_id: string;
}
