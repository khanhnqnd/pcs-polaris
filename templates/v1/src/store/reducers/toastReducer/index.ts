import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToastStatus = 'normal' | 'error';

type ToastPayload = {
  message: string;
  status?: ToastStatus;
};

export type ToastState = {
  open: boolean;
  message: string;
  status: ToastStatus;
};

const initState: ToastState = {
  open: false,
  status: 'normal',
  message: '',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState: initState,
  reducers: {
    openToast: (state: ToastState, action: PayloadAction<ToastPayload>) => {
      state.open = true;
      state.status = action.payload.status ?? 'normal';
      state.message = action.payload.message;
    },
    closeToast: (state: ToastState) => {
      state.open = false;
    },
  },
});
export const toastReducer = toastSlice.reducer;
export const toastAction = toastSlice.actions;
