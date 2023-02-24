import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginValues } from "../../utils/type";
import { AuthState } from "../../utils/CustomerInterface";
import authService from "./authService";

const getUserFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;
const initialState: AuthState = {
  user: getUserFromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const loginService = createAsyncThunk(
  "auth/login-admin",
  async (user: LoginValues, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (_, thunkAPI) => {
    try {
      return await authService.getOrders();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Login success";
      })
      .addCase(loginService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
      });
  },
});
export default authSlice.reducer;
