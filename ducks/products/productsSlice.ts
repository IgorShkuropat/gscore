import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { TInitialState, TProduct, SubscribeResponse } from './types';
import { api } from 'api';
import type {
  BuySubscribeResponseDto,
  BuySubscribeDto,
  ActivateLicenseCodeBodyDto,
  LicenceCodeResponseDto,
} from 'api/generated/api';

export const getProducts = createAsyncThunk(
  'products/get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.ProductsApi.productsControllerGetProducts();
      return response.data as TProduct[];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const buySubscribe = createAsyncThunk<
  BuySubscribeResponseDto,
  BuySubscribeDto
>('products/buySubscribe', async (priceId, { rejectWithValue }) => {
  try {
    const response = await api.PaymentsApi.paymentsControllerBuySubscribe(
      priceId,
    );
    return response.data as BuySubscribeResponseDto;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getSelfSubscribes = createAsyncThunk<SubscribeResponse[], void>(
  'products/getSelfSubscribes',
  async (_, { rejectWithValue }) => {
    try {
      const response =
        await api.SubscribeApi.subscribeControllerGetSelfSubscribe();
      return response.data as SubscribeResponse[];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const activateCode = createAsyncThunk(
  'products/activateCode',
  async (codeId: ActivateLicenseCodeBodyDto, { rejectWithValue }) => {
    try {
      const response = await api.CodeApi.licenseCodeControllerActivateCode(
        codeId,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

const initialState: TInitialState = {
  products: [],
  choosenProduct: null,
  purchasedSubscription: null,
  isSubscribesLoading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    chooseProduct(state, action: PayloadAction<string>) {
      let choosenProduct =
        state.products.find(product => String(product.id) === action.payload) ||
        null;
      state.choosenProduct = choosenProduct;
    },
  },
  extraReducers: {
    [getProducts.fulfilled.type]: (
      state,
      action: PayloadAction<TProduct[]>,
    ) => {
      state.products = action.payload;
    },
    [buySubscribe.fulfilled.type]: (
      state,
      action: PayloadAction<BuySubscribeResponseDto>,
    ) => {
      state.purchasedSubscription = action.payload;
    },
    [getSelfSubscribes.pending.type]: state => {
      state.isSubscribesLoading = true;
    },
    [getSelfSubscribes.fulfilled.type]: state => {
      state.isSubscribesLoading = false;
    },
  },
});

export const { chooseProduct } = productsSlice.actions;
export default productsSlice.reducer;
