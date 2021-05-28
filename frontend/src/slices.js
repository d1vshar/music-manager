import { createSlice } from '@reduxjs/toolkit';

export const musicQueueSlice = createSlice({
  name: 'musicQueue',
  initialState: {
    queue: [],
  },
  reducers: {
    addToQueue: (state, action) => {
      state.queue.push(...action.payload);
    },
    setQueue: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.queue = [...action.payload];
    },
  },
});

export const { addToQueue, setQueue } = musicQueueSlice.actions;

export default musicQueueSlice.reducer;
