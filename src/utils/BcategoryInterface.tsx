export interface BCategoryState {
  bCategories: BlogCategory[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}
interface BlogCategory {
  _id: string;
  title: string;
  updatedAt: string;
  __v?: number;
}
export interface BlogCategoryTable {
  key: React.Key;
  name: string;
  action: JSX.Element;
}
