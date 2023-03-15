import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignup, userLogin } from 'shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
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
      rejectWithValue(response);
    }
  }
);
