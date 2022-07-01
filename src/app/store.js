import { configureStore } from '@reduxjs/toolkit';

import cameraReducer from '../features/Camera-Slice';
import AppReducer from '../features/App-Slice.jsx';

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    App:AppReducer
  },
});
