import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EnquiryState } from "../../utils/EnquiryInterface";
import enquiryService from "./enquiryService";

export const getEnquiries = createAsyncThunk(
  "enquiry/get-enquiries",
  async (_, thunkAPI) => {
    try {
      return await enquiryService.getEnquiries();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: EnquiryState = {
  enquires: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const enquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEnquiries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enquires = action.payload;
      })
      .addCase(getEnquiries.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});
export default enquirySlice.reducer;
