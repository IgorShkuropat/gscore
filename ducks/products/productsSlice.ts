import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { TInitialState, TProduct, SubscribeResponse } from './types';
import { api } from 'api';
import type {
  BuySubscribeResponseDto,
  BuySubscribeDto,
  ActivateLicenseCodeBodyDto,
  LicenseCode,
  ChangeSubscribeProductDto,
  ManageLicenseCodesDto,
} from 'api/generated/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
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

export const changeProduct = createAsyncThunk<
  SubscribeResponse,
  ChangeSubscribeProductDto
>('products/changeProduct', async (changeProductBody, { rejectWithValue }) => {
  try {
    const response =
      await api.SubscribeApi.subscribeControllerChangeSubscribeProduct(
        changeProductBody,
      );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getSelfCodes = createAsyncThunk<LicenseCode[], void>(
  'products/getSelfCodes',
  async (_, { rejectWithValue }) => {
    try {
      const response =
        await api.CodeApi.licenseCodeControllerGetSelfLicencesCodes();
      return response.data as LicenseCode[];
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

export const manageCodes = createAsyncThunk(
  'products/manageCodes',
  async (manageData: ManageLicenseCodesDto, { rejectWithValue }) => {
    try {
      const response =
        await api.CodeApi.licenseCodeControllerManageLicenseCodes(manageData);
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
  isCodesLoading: false,
  isSubscribeLoading: false,
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
    [getSelfCodes.pending.type]: state => {
      state.isCodesLoading = true;
    },
    [getSelfCodes.fulfilled.type]: state => {
      state.isCodesLoading = false;
    },
    [manageCodes.pending.type]: state => {
      state.isCodesLoading = true;
    },
    [manageCodes.fulfilled.type]: state => {
      state.isCodesLoading = false;
    },
    [changeProduct.pending.type]: state => {
      state.isSubscribeLoading = true;
    },
    [changeProduct.fulfilled.type]: state => {
      state.isSubscribeLoading = false;
    },
  },
});

export const { chooseProduct } = productsSlice.actions;
export default productsSlice.reducer;
