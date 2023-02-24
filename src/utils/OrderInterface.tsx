export interface OrderState {
  orders: Order[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: object | string | null;
}

interface OrderProduct {
  product: {
    title: string;
  };
}

export interface Order {
  id: string;
  orderBy: {
    firstName: string;
    lastName: string;
  };
  orderStatus: string;
  products: OrderProduct[];
  paymentIntent: {
    amount: number;
  };
}

export interface OrderTable {
  key: React.Key;
  name: string;
  product: React.ReactNode;
  amount: string;
  status: string;
  action: JSX.Element;
}
