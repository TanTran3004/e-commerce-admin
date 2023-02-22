import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrandState } from "../../utils/BrandInterface";
import brandService from "./brandService";

export const getBrands = createAsyncThunk(
  "brand/get-brands",
  async (_, thunkAPI) => {
    try {
      return await brandService.getBrands();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState: BrandState = {
  brands: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});
export default brandSlice.reducer;
