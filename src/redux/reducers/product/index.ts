import { createReducer } from 'deox';

import {
  TBuyProductResponse,
  TGetFilterProductListResponse,
  TGetMyProductResponse,
  TGetProductRateResponse,
  TGetProductResponse,
  TGetProductsByCategoriesResponse,
  TGetProductsSavedResponse,
  TGetProductsSearchResponse,
  TRateProductResponse,
  TSaveProductResponse,
  TUnsaveProductResponse,
} from '@/services/api/product';
import {
  buyProductAction,
  getFilterProductListAction,
  getMyProductAction,
  getProductRateAction,
  getProductAction,
  getProductsByCategoriesAction,
  getProductsSavedAction,
  getProductsSearchAction,
  rateProductAction,
  saveProductAction,
  unsaveProductAction,
} from '@/redux/actions';
import { buyProductUpdateState } from './buy-product';
import { getFilterProductListUpdateState } from './get-filter-product-list';
import { getMyProductUpdateState } from './get-my-product';
import { getProductRateUpdateState } from './get-product-rate';
import { getProductUpdateState } from './get-product';
import { getProductsByCategoriesUpdateState } from './get-products-by-categories';
import { getProductsSavedUpdateState } from './get-products-saved';
import { getProductsSearchUpdateState } from './get-products-search';
import { rateProductUpdateState } from './rate-product';
import { saveProductUpdateState } from './save-product';
import { unsaveProductUpdateState } from './unsave-product';

export type TProductState = {
  buyProductResponse?: TBuyProductResponse;
  getFilterProductListResponse?: TGetFilterProductListResponse;
  getMyProductResponse?: TGetMyProductResponse;
  getProductRateResponse?: TGetProductRateResponse;
  getProductResponse?: TGetProductResponse;
  getProductsByCategoriesResponse?: TGetProductsByCategoriesResponse;
  getProductsSavedResponse?: TGetProductsSavedResponse;
  getProductsSearchResponse?: TGetProductsSearchResponse;
  rateProductResponse?: TRateProductResponse;
  saveProductResponse?: TSaveProductResponse;
  unsaveProductResponse?: TUnsaveProductResponse;
};

const initialState: TProductState = {
  buyProductResponse: undefined,
  getFilterProductListResponse: undefined,
  getMyProductResponse: undefined,
  getProductRateResponse: undefined,
  getProductResponse: undefined,
  getProductsByCategoriesResponse: undefined,
  getProductsSavedResponse: undefined,
  getProductsSearchResponse: undefined,
  rateProductResponse: undefined,
  saveProductResponse: undefined,
  unsaveProductResponse: undefined,
};

const ProductReducer = createReducer(initialState, (handleAction) => [
  handleAction(buyProductAction.success, buyProductUpdateState),
  handleAction(getFilterProductListAction.success, getFilterProductListUpdateState),
  handleAction(getMyProductAction.success, getMyProductUpdateState),
  handleAction(getProductRateAction.success, getProductRateUpdateState),
  handleAction(getProductAction.success, getProductUpdateState),
  handleAction(getProductsByCategoriesAction.success, getProductsByCategoriesUpdateState),
  handleAction(getProductsSavedAction.success, getProductsSavedUpdateState),
  handleAction(getProductsSearchAction.success, getProductsSearchUpdateState),
  handleAction(rateProductAction.success, rateProductUpdateState),
  handleAction(saveProductAction.success, saveProductUpdateState),
  handleAction(unsaveProductAction.success, unsaveProductUpdateState),
]);

export default ProductReducer;
