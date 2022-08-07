import { all, takeLatest } from 'redux-saga/effects';

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

import { buyProductSaga } from './buy-product';
import { getFilterProductListSaga } from './get-filter-product-list';
import { getMyProductSaga } from './get-my-product';
import { getProductRateSaga } from './get-product-rate';
import { getProductSaga } from './get-product';
import { getProductsByCategoriesSaga } from './get-products-by-categories';
import { getProductsSavedSaga } from './get-products-saved';
import { getProductsSearchSaga } from './get-products-search';
import { rateProductSaga } from './rate-product';
import { saveProductSaga } from './save-product';
import { unsaveProductSaga } from './unsave-product';

export default function* root(): Generator {
  yield all([
    takeLatest(buyProductAction.request.type, buyProductSaga),
    takeLatest(getFilterProductListAction.request.type, getFilterProductListSaga),
    takeLatest(getMyProductAction.request.type, getMyProductSaga),
    takeLatest(getProductRateAction.request.type, getProductRateSaga),
    takeLatest(getProductAction.request.type, getProductSaga),
    takeLatest(getProductsByCategoriesAction.request.type, getProductsByCategoriesSaga),
    takeLatest(getProductsSavedAction.request.type, getProductsSavedSaga),
    takeLatest(getProductsSearchAction.request.type, getProductsSearchSaga),
    takeLatest(rateProductAction.request.type, rateProductSaga),
    takeLatest(saveProductAction.request.type, saveProductSaga),
    takeLatest(unsaveProductAction.request.type, unsaveProductSaga),
  ]);
}
