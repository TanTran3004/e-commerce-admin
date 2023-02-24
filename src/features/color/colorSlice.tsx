import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ColorState } from "../../utils/ColorInterface";
import colorService from "./colorService";

export const getColors = createAsyncThunk(
  "colors/get-colors",
  async (_, thunkAPI) => {
    try {
      return await colorService.getColors();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: ColorState = {
  colors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getColors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.colors = action.payload;
      })
      .addCase(getColors.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});
export default colorSlice.reducer;
