import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import { actions, reducers } from 'ducks';

const reducer = combineReducers({ ...reducers });
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export type State = ReturnType<typeof reducer>;

const rootReducer = (state: State, action: AnyAction) => {
  let nextState = state as State | undefined;
  if (action.type === HYDRATE) {
    const serverState = action.payload as State;
    nextState = {
      ...state,
      ...serverState,
      products: {
        products: [...serverState.products.products],
        choosenProduct: state.products.choosenProduct,
        purchasedSubscription: state.products.purchasedSubscription,
        isCodesLoading: state.products.isCodesLoading,
        isSubscribeLoading: state.products.isSubscribeLoading,
      },
      user: {
        ...state.user,
        subscribes: serverState.user.subscribes,
      },
    };
  }
  return reducer(nextState, action);
};
export default persistReducer(persistConfig, rootReducer as typeof reducer);
