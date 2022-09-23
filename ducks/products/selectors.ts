import { State } from './../../store/persistReducer';
import type { SelectProducts, SelectChoosenPrice } from './types';
import { createSelector } from '@reduxjs/toolkit';

export const selectProducts: SelectProducts = state => state.products.products;
export const selectChoosenProduct = state => state.products.choosenProduct;
export const selectPrices = createSelector(
  selectProducts,
  product =>
    product &&
    product.map(product => product.prices !== null && product.prices[0].price),
);

export const selectProduct = productId =>
  createSelector(selectProduct, products =>
    products.filter(product => productId === product.id),
  );

export const selectChoosenProductPrice = createSelector(
  selectChoosenProduct,
  product => product.prices[0].price,
);

export const selectChoosenPriceId = createSelector(
  selectChoosenProduct,
  product => product.prices[0].id,
);

export const selectIsSubscribesLoading: (state: State) => boolean = state =>
  state.products.isSubscribesLoading;
