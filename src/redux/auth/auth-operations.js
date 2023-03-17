import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  userSignup,
  userLogin,
  getCurrentUser,
  userLogout,
} from 'shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignup(data);

      return result;
    } catch ({ response }) {
      const { code } = response.data;
      if (response.status === 400 && code === 11000) {
        Notify.failure('User with this email already exists.');
      } else if (response.status === 400) {
        Notify.failure('User creation error.');
      } else if (response.status === 500) {
        Notify.failure('Server error.');
      } else return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);
      return result;
    } catch ({ response }) {
      if (response.status === 400) {
        Notify.failure('Email or password is incorrect.');
      }
      rejectWithValue(response);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await getCurrentUser(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userLogout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
