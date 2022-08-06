import { all, takeLatest } from 'redux-saga/effects';

import { getFilterProductListAction, getProductsByCategoriesAction, getProductsSearchAction } from '@/redux/actions';

import { getFilterProductListSaga } from './get-filter-product-list';
import { getProductsByCategoriesSaga } from './get-products-by-categories';
import { getProductsSearchSaga } from './get-products-search';

export default function* root(): Generator {
  yield all([
    takeLatest(getFilterProductListAction.request.type, getFilterProductListSaga),
    takeLatest(getProductsByCategoriesAction.request.type, getProductsByCategoriesSaga),
    takeLatest(getProductsSearchAction.request.type, getProductsSearchSaga),
  ]);
}
