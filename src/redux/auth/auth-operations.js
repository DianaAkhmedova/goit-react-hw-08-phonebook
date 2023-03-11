import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSignup } from 'shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await userSignup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
