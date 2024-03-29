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
  createdAt: string;
}

export interface OrderTable {
  key: React.Key;
  name: string;
  product: React.ReactNode;
  amount: string;
  status: string;
  date: string;
  action: JSX.Element;
}
export interface AddProductFields {
  title: string;
  description: string;
  price: number | string;
  quantity: number | string;
  category: string;
  brand: string;
  color: string[];
  images: Image[];
  [key: string]: number | string | any;
}
export interface Image {
  url: string;
  public_id: string;
  asset_id: string;
}
