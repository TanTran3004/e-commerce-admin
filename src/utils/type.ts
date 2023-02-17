export interface LoginValues {
  email: string;
  password: string;
}

export interface DataTypeTable {
  key?: React.Key;
  name?: string;
  product?: number;
  status?: string;
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
  customers: Array<{ name: string; email: string }> | null;
  message: object | string | null;
}
export interface ThunkAPIType {
  // Define the type of the `thunkAPI` argument passed to the login function
  rejectValue: {
    message: string;
    statusCode: number;
  };
}
