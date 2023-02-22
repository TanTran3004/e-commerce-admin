export interface BrandState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
  brands: [];
}
