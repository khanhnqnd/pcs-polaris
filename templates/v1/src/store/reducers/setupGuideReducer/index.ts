import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SetupGuideState = {
  open: boolean;

  setup_codes: string[];
  setup_codes_loading: boolean;

  toggle_setup: string;
};

const initState: SetupGuideState = {
  open: false,

  setup_codes: [],
  setup_codes_loading: false,

  toggle_setup: '',
};

export type ToggleSetupInput = {
  setup_code: string;
};

const setupGuideSlice = createSlice({
  name: 'setupGuide',
  initialState: initState,
  reducers: {
    openSetupGuide: (state: SetupGuideState) => {
      state.open = true;
    },
    closeSetupGuide: (state: SetupGuideState) => {
      state.open = false;
    },

    fetchSetupGuides: (state: SetupGuideState) => {
      state.setup_codes_loading = true;
    },
    fetchSetupGuidesSucceed: (state: SetupGuideState, action) => {
      state.setup_codes_loading = false;
      state.setup_codes = action.payload.setup_codes;
    },
    fetchSetupGuidesFailed: (state: SetupGuideState) => {
      state.setup_codes_loading = false;
    },

    toggleSetupGuide: (state: SetupGuideState, action: PayloadAction<ToggleSetupInput>) => {
      state.toggle_setup = action.payload.setup_code;
    },
    toggleSetupGuideSucceed: (state: SetupGuideState, action) => {
      state.toggle_setup = '';
      state.setup_codes = action.payload.setup_codes;
    },
    toggleSetupGuideFailed: (state: SetupGuideState) => {
      state.toggle_setup = '';
    },
  },
});
export const setupGuideReducer = setupGuideSlice.reducer;
export const setupGuideAction = setupGuideSlice.actions;
