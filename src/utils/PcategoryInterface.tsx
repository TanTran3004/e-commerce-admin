export interface ProductCategoryState {
  categories: ProductCategory[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}
interface ProductCategory {
  _id: string;
  title: string;
  updatedAt: string;
  __v?: number;
}
export interface ProductCategoryTable {
  key: React.Key;
  name: string;
  action: JSX.Element;
}
