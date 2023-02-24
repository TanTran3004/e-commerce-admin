export interface ColorState {
  colors: Color[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}
interface Color {
  _id: string;
  title: string;
  updatedAt: string;
  __v?: number;
}
export interface ColorTable {
  key: React.Key;
  name: string;
  action: JSX.Element;
}
