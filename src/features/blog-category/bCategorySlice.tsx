import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BCategoryState } from "../../utils/BcategoryInterface";
import bCategoryService from "./bCategoryService";

export const getBCategory = createAsyncThunk(
  "blogCategory/get-blogCategories",
  async (_, thunkAPI) => {
    try {
      return await bCategoryService.getBlogCategories();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: BCategoryState = {
  bCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const bCategorySlice = createSlice({
  name: "bCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bCategories = action.payload;
      })
      .addCase(getBCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default bCategorySlice.reducer;
