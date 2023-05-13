/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from '@/entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
          User,
          LoginByUsernameProps,
          ThunkConfig<string>
          >(
              'login/loginByUserName',
              async (authData, thunkAPI) => {
                  const { extra, dispatch, rejectWithValue } = thunkAPI;
                  try {
                      const response = await extra.api.post<User>('/login', authData);
                      if (!response.data) {
                          throw new Error();
                      }
                      dispatch(userActions.setAuthData(response.data));
                      // @ts-ignore
                      extra.navigate('/about');
                      return response.data;
                  } catch (e) {
                      console.log(e);
                      return rejectWithValue('error');
                  }
              },
          );
