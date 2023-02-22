export interface LoginValues {
  email: string;
  password: string;
}

export interface DataTypeTable {
  key?: React.Key;
  name?: string;
  email?: string;
  mobile?: string;
}

export interface ThunkAPIType {
  // Define the type of the `thunkAPI` argument passed to the login function
  rejectValue: {
    message: string;
    statusCode: number;
  };
}
