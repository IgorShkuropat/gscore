import productSlice from './productsSlice';
export {
  getProducts,
  chooseProduct,
  buySubscribe,
  getSelfSubscribes,
  activateCode,
} from './productsSlice';
export {
  selectPrices,
  selectProducts,
  selectProduct,
  selectChoosenProduct,
  selectChoosenPriceId,
  selectChoosenProductPrice,
  selectIsSubscribesLoading,
} from './selectors';
export default productSlice;
