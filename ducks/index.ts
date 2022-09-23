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
  activateCode,
} from 'ducks/products';
import { logout, loginViaCookie } from 'ducks/auth';
import { selectUserSubscriptions, selectUserCodes } from './user/selectors';
import {
  selectPrices,
  selectProducts,
  selectProduct,
  selectChoosenProduct,
  selectChoosenPriceId,
  selectIsSubscribesLoading,
  selectChoosenProductPrice,
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
  selectUserCodes,
  selectIsSubscribesLoading,
};
