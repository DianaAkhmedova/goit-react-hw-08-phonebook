import { createSlice } from '@reduxjs/toolkit';

import { signup, login, current, logout } from './auth-operations';

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
      })
      .addCase(current.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        store.user = payload;
        store.isLogin = true;
        store.isLoading = false;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.token = '';
        store.error = payload;
      })
      .addCase(logout.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, store => {
        store.user = {};
        store.token = '';
        store.isLogin = false;
        store.isLoading = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default authSlice.reducer;
