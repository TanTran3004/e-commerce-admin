export interface CustomerTable {
  key: React.Key;
  name: string;
  email: string;
  mobile: string;
}
export interface UserState {
  _id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  mobile: string | null;
  token: string | null;
}
export interface AuthState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  user: UserState | null;
  message: object | string | null;
}
export interface CustomerState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  customers: Customer[];
  message: object | string | null;
}
interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password?: string;
  role?: string;
  isBlocked?: boolean;
  cart?: any[];
  address?: string;
  wishlist?: any[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  refreshToken?: string;
}
