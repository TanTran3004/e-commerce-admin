export interface ProductState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  products: {
    products: Product[];
    length: number;
  };
  message: object | string | null;
}
interface Product {
  _id: string;
  brand: string;
  category: string;
  color: string;
  createdAt: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  rating: [{}];
  slug: string;
  sold: number;
  title: string;
  updatedAt: string;
  totalRating: string;
}

export interface ProductTable {
  key: React.Key;
  title: string;
  brand: string;
  price: string;
  category: string;
  color: string;
  action: JSX.Element;
}
