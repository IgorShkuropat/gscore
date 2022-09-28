import { api } from 'api/index';
import {
  getSelfSubscribes,
  getSelfCodes,
  changeProduct,
  manageCodes,
} from 'ducks/products';
import { LicenseCode } from 'api/generated';
import {
  TInitialState,
  UserRegisterInfo,
  RegisterResponse,
  UserLoginInfo,
  PasswordData,
  UserData,
  SubscribeResponseDto,
} from './types';
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Draft,
} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk<
  RegisterResponse,
  UserRegisterInfo,
  { rejectValue: string }
>('user/signUp', async (userRegisterInfo, { rejectWithValue }) => {
  try {
    const response = await api.UsersApi.usersControllerSignUp(userRegisterInfo);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk<
  any,
  UserLoginInfo,
  { rejectValue: string }
>('user/signIn', async (userLoginInfo, { rejectWithValue }) => {
  try {
    const response = await api.UsersApi.usersControllerSignIn(userLoginInfo);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updatePersonalData = createAsyncThunk<
  any,
  UserData,
  { rejectValue: string }
>('user/updatePersonalData', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.UsersApi.usersControllerUpdatePersonalData(
      userData,
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const updatePassword = createAsyncThunk<
  any,
  PasswordData,
  { rejectValue: string }
>('user/updatePassword', async (passwordData, { rejectWithValue }) => {
  try {
    const response = await api.UsersApi.usersControllerUpdatePassword(
      passwordData,
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getUserInfo = createAsyncThunk<any, void, { rejectValue: string }>(
  'user/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response =
        await api.SubscribeApi.subscribeControllerGetSelfSubscribe();
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const updateCodes = (state, action: PayloadAction<LicenseCode[]>) => {
  if (state.subscribes === null) {
    return state.subscribes;
  }
  state.subscribes = state.subscribes.map(sub => {
    if (!sub.codes) {
      return sub;
    }

    const updatedCodes = sub.codes.map(code => {
      const attachedCodes =
        action.payload.filter(code => code.subscribeId === sub.id) || null;
      let a =
        attachedCodes.find(attachedCode => code.code === attachedCode.code)
          ?.status || code.status;
      code.status = a;
      return code;
    });

    return {
      ...sub,

      codes: updatedCodes,
    };
  }) as Draft<SubscribeResponseDto[]>;
};

const initialState: TInitialState = {
  id: null,
  email: null,
  username: null,
  subscribes: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.rejected.type]: (state, action) => {
      state.username = action.payload;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.email = action.payload.user.email;
      state.username = action.payload.user.username;
      state.id = action.payload.user.id;
    },
    [getSelfSubscribes.fulfilled.type]: (
      state,
      action: PayloadAction<SubscribeResponseDto[]>,
    ) => {
      state.subscribes = action.payload;
    },
    [getSelfCodes.fulfilled.type]: updateCodes,
    [changeProduct.fulfilled.type]: (
      state,
      action: PayloadAction<SubscribeResponseDto>,
    ) => {
      if (state.subscribes === null) {
        return;
      }
      state.subscribes = state.subscribes.map(sub => {
        if (sub.id === action.payload.id) {
          sub = { ...action.payload };
        }
        return sub;
      });
    },
    [manageCodes.fulfilled.type]: updateCodes,
  },
});

export const actions = userSlice.actions;

export default userSlice.reducer;
