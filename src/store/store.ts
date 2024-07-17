// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { userSessionReducer } from './user-session-slice';

export const store = configureStore({
  reducer: {
    userSessionSlice: userSessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
