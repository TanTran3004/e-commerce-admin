import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomerState } from "../../utils/type";
import customerService from "./customerService";

export const getUsers = createAsyncThunk(
  "customer/get-customers",
  async (_, thunkAPI) => {
    try {
      return await customerService.getUsers();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState: CustomerState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default customerSlice.reducer;
