import { all, takeLatest } from 'redux-saga/effects';

import {
  askProductQuestionAction,
  buyProductAction,
  downloadProductFileAction,
  getFilterProductListAction,
  getMyProductAction,
  getProductQuestionsAction,
  getProductRateAction,
  getProductAction,
  getProductsByCategoriesAction,
  getProductsSavedAction,
  getProductsSearchAction,
  rateProductAction,
  saveProductAction,
  unsaveProductAction,
} from '@/redux/actions';

import { askProductQuestionSaga } from './ask-product-question';
import { buyProductSaga } from './buy-product';
import { downloadProductFileSaga } from './download-product-file';
import { getFilterProductListSaga } from './get-filter-product-list';
import { getMyProductSaga } from './get-my-product';
import { getProductQuestionsSaga } from './get-product-questions';
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
    takeLatest(askProductQuestionAction.request.type, askProductQuestionSaga),
    takeLatest(buyProductAction.request.type, buyProductSaga),
    takeLatest(downloadProductFileAction.request.type, downloadProductFileSaga),
    takeLatest(getFilterProductListAction.request.type, getFilterProductListSaga),
    takeLatest(getMyProductAction.request.type, getMyProductSaga),
    takeLatest(getProductQuestionsAction.request.type, getProductQuestionsSaga),
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
