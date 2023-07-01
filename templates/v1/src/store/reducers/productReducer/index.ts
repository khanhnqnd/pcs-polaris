import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductState = {
  products: string[];
  products_loading: boolean;
};

const initState: ProductState = {
  products: [],
  products_loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState: initState,
  reducers: {
    fetchProducts: (state: ProductState) => {
      state.products_loading = true;
    },
    fetchProductsSucceed: (state: ProductState, action) => {
      state.products_loading = false;
      state.products = action.payload.products;
    },
    fetchProductsFailed: (state: ProductState) => {
      state.products_loading = false;
    },
  },
});
export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;
