import { setCookie } from 'services/cookie';
import { signIn } from 'ducks/user';
import { createSlice } from '@reduxjs/toolkit';
import type { TInitialState } from './types';

const initialState: TInitialState = {
  auth: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.auth = false;
    },
    loginViaCookie(state) {
      state.auth = true;
    },
  },
  extraReducers: {
    [signIn.fulfilled.type]: state => {
      state.auth = true;
    },
  },
});

export const { logout, loginViaCookie } = authSlice.actions;
export default authSlice.reducer;
