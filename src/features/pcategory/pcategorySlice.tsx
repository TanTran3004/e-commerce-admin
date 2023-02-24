import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductCategoryState } from "../../utils/PcategoryInterface";

import pCategoryService from "./pcategoryService";

export const getCategories = createAsyncThunk(
  "productCategory/get-productCategories",
  async (_, thunkAPI) => {
    try {
      return await pCategoryService.getProductCategories();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: ProductCategoryState = {
  categories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const pCategorySlice = createSlice({
  name: "pCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});
export default pCategorySlice.reducer;
