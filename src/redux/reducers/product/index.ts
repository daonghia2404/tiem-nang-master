import { createReducer } from 'deox';

import {
  TAskProductQuestionResponse,
  TBuyProductResponse,
  TDownloadProductFileResponse,
  TGetFilterProductListResponse,
  TGetMyProductResponse,
  TGetProductQuestionsResponse,
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
import { askProductQuestionUpdateState } from './ask-product-question';
import { buyProductUpdateState } from './buy-product';
import { downloadProductFileUpdateState } from './download-product-file';
import { getFilterProductListUpdateState } from './get-filter-product-list';
import { getMyProductUpdateState } from './get-my-product';
import { getProductQuestionsUpdateState } from './get-product-questions';
import { getProductRateUpdateState } from './get-product-rate';
import { getProductUpdateState } from './get-product';
import { getProductsByCategoriesUpdateState } from './get-products-by-categories';
import { getProductsSavedUpdateState } from './get-products-saved';
import { getProductsSearchUpdateState } from './get-products-search';
import { rateProductUpdateState } from './rate-product';
import { saveProductUpdateState } from './save-product';
import { unsaveProductUpdateState } from './unsave-product';

export type TProductState = {
  askProductQuestionResponse?: TAskProductQuestionResponse;
  buyProductResponse?: TBuyProductResponse;
  downloadProductFileResponse?: TDownloadProductFileResponse;
  getFilterProductListResponse?: TGetFilterProductListResponse;
  getMyProductResponse?: TGetMyProductResponse;
  getProductQuestionsResponse?: TGetProductQuestionsResponse;
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
  askProductQuestionResponse: undefined,
  buyProductResponse: undefined,
  downloadProductFileResponse: undefined,
  getFilterProductListResponse: undefined,
  getMyProductResponse: undefined,
  getProductQuestionsResponse: undefined,
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
  handleAction(askProductQuestionAction.success, askProductQuestionUpdateState),
  handleAction(buyProductAction.success, buyProductUpdateState),
  handleAction(downloadProductFileAction.success, downloadProductFileUpdateState),
  handleAction(getFilterProductListAction.success, getFilterProductListUpdateState),
  handleAction(getMyProductAction.success, getMyProductUpdateState),
  handleAction(getProductQuestionsAction.success, getProductQuestionsUpdateState),
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
