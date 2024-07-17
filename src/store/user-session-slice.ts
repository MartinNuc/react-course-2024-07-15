import { createSlice } from "@reduxjs/toolkit";
import { User } from "../user-session/user";

export type UserSessionState = {
  user: User | null;
}

const initialState: UserSessionState = {
  user: null
}

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});
 
export const { login, logout } = userSessionSlice.actions;
export const userSessionReducer = userSessionSlice.reducer;