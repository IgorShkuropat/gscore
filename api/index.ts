import { http } from 'services/http';
import {
  ProductsApi,
  UsersApi,
  CodeApi,
  PaymentsApi,
  SubscribeApi,
} from './generated/api';
export const api = {
  ProductsApi: new ProductsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    http.axios,
  ),
  UsersApi: new UsersApi(
    undefined,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    http.axios,
  ),
  CodeApi: new CodeApi(
    undefined,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    http.axios,
  ),
  PaymentsApi: new PaymentsApi(
    undefined,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    http.axios,
  ),
  SubscribeApi: new SubscribeApi(
    undefined,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    http.axios,
  ),
};
