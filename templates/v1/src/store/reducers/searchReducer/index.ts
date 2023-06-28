import { createSlice } from '@reduxjs/toolkit';

export type SearchState = {
  loading_emails: boolean;
  emails: any[];
};

const initState: SearchState = {
  loading_emails: false,
  emails: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initState,
  reducers: {
    searchEmails: (state: SearchState, _action) => {
      state.loading_emails = true;
    },
    searchEmailsSucceed: (state: SearchState, action) => {
      state.loading_emails = false;
      state.emails = action.payload.emails;
    },
    searchEmailsFailed: (state: SearchState) => {
      state.loading_emails = false;
    },
  },
});
export const searchReducer = searchSlice.reducer;
export const searchAction = searchSlice.actions;
