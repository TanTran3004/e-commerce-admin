import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderState } from "../../utils/OrderInterface";
import orderService from "./orderService";

export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (_, thunkAPI) => {
    try {
      return await orderService.getOrders();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: OrderState = {
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(getColors.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getColors.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.colors = action.payload;
    //   })
    //   .addCase(getColors.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.message = action.error;
    //     state.isLoading = false;
    //   });
  },
});

export default orderSlice.reducer;
