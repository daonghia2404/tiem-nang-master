import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProductsSearchAction } from '@/redux/actions';
import { getProductsSearch, TGetProductsSearchResponse } from '@/services/api';

// FUNCTION

export function* getProductsSearchSaga(action: ActionType<typeof getProductsSearchAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProductsSearch, materials);
    const getProductsSearchResponse: TGetProductsSearchResponse = response as TGetProductsSearchResponse;
    yield put(getProductsSearchAction.success(getProductsSearchResponse));
    successCallback?.(getProductsSearchResponse);
  } catch (err) {
    yield put(getProductsSearchAction.failure(err));
    failedCallback?.(err);
  }
}
