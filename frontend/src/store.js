import { configureStore } from '@reduxjs/toolkit';
import musicQueueReducer from './slices';

export default configureStore({
  reducer: {
    musicQueue: musicQueueReducer,
  },
});
