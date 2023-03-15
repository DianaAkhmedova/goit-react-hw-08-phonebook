import { createSlice } from '@reduxjs/toolkit';

import { signup, login } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(signup.fulfilled, (store, { payload }) => {
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
        store.isLoading = false;
      })
      .addCase(signup.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(login.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
        store.isLoading = false;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default authSlice.reducer;
