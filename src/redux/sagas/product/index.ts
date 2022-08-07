import { all, takeLatest } from 'redux-saga/effects';

import {
  getFilterProductListAction,
  getMyProductAction,
  getProductsByCategoriesAction,
  getProductsSavedAction,
  getProductsSearchAction,
} from '@/redux/actions';

import { getFilterProductListSaga } from './get-filter-product-list';
import { getMyProductSaga } from './get-my-product';
import { getProductsByCategoriesSaga } from './get-products-by-categories';
import { getProductsSavedSaga } from './get-products-saved';
import { getProductsSearchSaga } from './get-products-search';

export default function* root(): Generator {
  yield all([
    takeLatest(getFilterProductListAction.request.type, getFilterProductListSaga),
    takeLatest(getMyProductAction.request.type, getMyProductSaga),
    takeLatest(getProductsByCategoriesAction.request.type, getProductsByCategoriesSaga),
    takeLatest(getProductsSavedAction.request.type, getProductsSavedSaga),
    takeLatest(getProductsSearchAction.request.type, getProductsSearchSaga),
  ]);
}
