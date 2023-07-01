import { createSlice } from '@reduxjs/toolkit';

export type SearchState = {
  loading_customers: boolean;
  customers: any[];
};

const initState: SearchState = {
  loading_customers: false,
  customers: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initState,
  reducers: {
    searchCustomers: (state: SearchState, _action) => {
      state.loading_customers = true;
    },
    searchCustomersSucceed: (state: SearchState, action) => {
      state.loading_customers = false;
      state.customers = action.payload.customers;
    },
    searchCustomersFailed: (state: SearchState) => {
      state.loading_customers = false;
    },
  },
});
export const searchReducer = searchSlice.reducer;
export const searchAction = searchSlice.actions;
