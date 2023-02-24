import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogState } from "../../utils/BlogInterface";
import blogService from "./blogService";

export const getBlogs = createAsyncThunk(
  "blog/get-blogs",
  async (_, thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: blogState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});
export default blogSlice.reducer;
