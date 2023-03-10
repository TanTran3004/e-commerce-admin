export interface BrandState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
  brands: Brand[];
}
interface Brand {
  _id: string;
  title: string;
  updatedAt: string;
  __v?: number;
}
export interface BrandTable {
  key: React.Key;
  name: string;
  action: JSX.Element;
}
