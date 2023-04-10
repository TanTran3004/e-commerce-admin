import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UploadState } from "../../utils/UploadInterface";
import uploadService from "./uploadService";

export const uploadImage: AsyncThunk<
  string[],
  File[],
  { rejectValue: unknown }
> = createAsyncThunk("upload/images", async (data: File[], thunkAPI) => {
  try {
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append("images", data[i]);
    }
    return await uploadService.uploadImage(formData);
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteImage: AsyncThunk<
  string[],
  string,
  { rejectValue: unknown }
> = createAsyncThunk("delete/images", async (id, thunkAPI) => {
  console.log(id);
  try {
    console.log(uploadService.deleteImage(id));
    return await uploadService.deleteImage(id);
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState: UploadState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.images.push(...action.payload);
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(deleteImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const deletedImageId = action.meta.arg;
        state.images = state.images.filter(
          (img: any) => img.public_id !== deletedImageId
        );
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default uploadSlice.reducer;
