import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    overlay: false,
    progress: 0,
  },
  reducers: {
    toggleOverlay(state, { payload }) {
      state.overlay = payload;
    },
    updateProgress(state, { payload }) {
      state.progress = payload;
    },
  },
});

export const { toggleOverlay, updateProgress } = loadingSlice.actions;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
