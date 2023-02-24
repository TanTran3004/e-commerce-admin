export interface OrderState {
  orders: Order[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}
interface Order {
  _id: string;
  title: string;
  updatedAt: string;
  __v?: number;
}
export interface OrderTable {
  key: React.Key;
  name: string;
  action: JSX.Element;
}
