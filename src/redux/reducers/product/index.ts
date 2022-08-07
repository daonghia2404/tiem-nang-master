import { createReducer } from 'deox';

import {
  TGetFilterProductListResponse,
  TGetMyProductResponse,
  TGetProductsByCategoriesResponse,
  TGetProductsSavedResponse,
  TGetProductsSearchResponse,
} from '@/services/api/product';
import {
  getFilterProductListAction,
  getMyProductAction,
  getProductsByCategoriesAction,
  getProductsSavedAction,
  getProductsSearchAction,
} from '@/redux/actions';
import { getFilterProductListUpdateState } from './get-filter-product-list';
import { getMyProductUpdateState } from './get-my-product';
import { getProductsByCategoriesUpdateState } from './get-products-by-categories';
import { getProductsSavedUpdateState } from './get-products-saved';
import { getProductsSearchUpdateState } from './get-products-search';

export type TProductState = {
  getFilterProductListResponse?: TGetFilterProductListResponse;
  getMyProductResponse?: TGetMyProductResponse;
  getProductsByCategoriesResponse?: TGetProductsByCategoriesResponse;
  getProductsSavedResponse?: TGetProductsSavedResponse;
  getProductsSearchResponse?: TGetProductsSearchResponse;
};

const initialState: TProductState = {
  getFilterProductListResponse: undefined,
  getMyProductResponse: undefined,
  getProductsByCategoriesResponse: undefined,
  getProductsSavedResponse: undefined,
  getProductsSearchResponse: undefined,
};

const ProductReducer = createReducer(initialState, (handleAction) => [
  handleAction(getFilterProductListAction.success, getFilterProductListUpdateState),
  handleAction(getMyProductAction.success, getMyProductUpdateState),
  handleAction(getProductsByCategoriesAction.success, getProductsByCategoriesUpdateState),
  handleAction(getProductsSavedAction.success, getProductsSavedUpdateState),
  handleAction(getProductsSearchAction.success, getProductsSearchUpdateState),
]);

export default ProductReducer;
