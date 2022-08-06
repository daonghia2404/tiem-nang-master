import { createReducer } from 'deox';

import {
  TGetFilterProductListResponse,
  TGetProductsByCategoriesResponse,
  TGetProductsSearchResponse,
} from '@/services/api/product';
import { getFilterProductListAction, getProductsByCategoriesAction, getProductsSearchAction } from '@/redux/actions';
import { getFilterProductListUpdateState } from './get-filter-product-list';
import { getProductsByCategoriesUpdateState } from './get-products-by-categories';
import { getProductsSearchUpdateState } from './get-products-search';

export type TProductState = {
  getFilterProductListResponse?: TGetFilterProductListResponse;
  getProductsByCategoriesResponse?: TGetProductsByCategoriesResponse;
  getProductsSearchResponse?: TGetProductsSearchResponse;
};

const initialState: TProductState = {
  getFilterProductListResponse: undefined,
  getProductsByCategoriesResponse: undefined,
  getProductsSearchResponse: undefined,
};

const ProductReducer = createReducer(initialState, (handleAction) => [
  handleAction(getFilterProductListAction.success, getFilterProductListUpdateState),
  handleAction(getProductsByCategoriesAction.success, getProductsByCategoriesUpdateState),
  handleAction(getProductsSearchAction.success, getProductsSearchUpdateState),
]);

export default ProductReducer;
