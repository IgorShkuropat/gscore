import {
  signUp,
  signIn,
  updatePassword,
  updatePersonalData,
  getUserInfo,
} from 'ducks/user';
import {
  chooseProduct,
  getProducts,
  buySubscribe,
  getSelfSubscribes,
  getSelfCodes,
  activateCode,
  changeProduct,
  manageCodes,
} from 'ducks/products';
import { logout, loginViaCookie } from 'ducks/auth';
import {
  selectUserSubscriptions,
  selectAttachedCodes,
  selectCurrentSubcribe,
} from './user/selectors';
import {
  selectPrices,
  selectProducts,
  selectProduct,
  selectChoosenProduct,
  selectChoosenPriceId,
  selectIsCodesLoading,
  selectChoosenProductPrice,
  selectIsSubscribeLoading,
} from 'ducks/products';
import { selectAuth } from 'ducks/auth';
import products from './products';
import user from './user';
import auth from './auth';

export const actions = {
  signIn,
  signUp,
  getProducts,
  chooseProduct,
  buySubscribe,
  logout,
  updatePassword,
  updatePersonalData,
  getUserInfo,
  loginViaCookie,
  getSelfSubscribes,
  activateCode,
  getSelfCodes,
  changeProduct,
  manageCodes,
};
export const reducers = { products, user, auth };
export const selectors = {
  selectPrices,
  selectProducts,
  selectProduct,
  selectChoosenProduct,
  selectChoosenPriceId,
  selectAuth,
  selectChoosenProductPrice,
  selectUserSubscriptions,
  selectAttachedCodes,
  selectIsCodesLoading,
  selectCurrentSubcribe,
  selectIsSubscribeLoading,
};
