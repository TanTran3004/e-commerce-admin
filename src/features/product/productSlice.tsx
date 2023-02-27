import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddProductFields } from "../../utils/OrderInterface";
import { ProductState } from "../../utils/ProductInterface";
import productService from "./productService";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createProduct = createAsyncThunk(
  "product/create-product",
  async (productData: AddProductFields, thunkAPI) => {
    try {
      return await productService.createProduct(productData);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState: ProductState = {
  products: {
    products: [],
    length: 0,
  },
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
