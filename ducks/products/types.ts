import {
  ProductResponseDto,
  BuySubscribeDto,
  BuySubscribeResponseDto,
  SubscribeResponseDto,
  ActivateLicenseCodeBodyDto,
  LicenceCodeResponseDto,
} from 'api/generated';
import type { RootState } from 'store';
export type { ActivateLicenseCodeBodyDto, LicenceCodeResponseDto };
export type TInitialState = {
  products: TProduct[];
  choosenProduct: null | TProduct;
  purchasedSubscription: null | BuySubscribeResponseDto;
  isSubscribesLoading: boolean;
};

export type TProduct = ProductResponseDto;

export type SelectProducts = (
  state: RootState,
) => RootState['products']['products'];

export type SelectChoosenPrice = (selector: any) => BuySubscribeDto;

export type SubscribeResponse = SubscribeResponseDto;
