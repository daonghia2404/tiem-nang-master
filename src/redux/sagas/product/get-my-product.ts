import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyProductAction } from '@/redux/actions';
import { getMyProduct, TGetMyProductResponse } from '@/services/api';

// FUNCTION

export function* getMyProductSaga(action: ActionType<typeof getMyProductAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyProduct, materials);
    const getMyProductResponse: TGetMyProductResponse = response as TGetMyProductResponse;
    yield put(getMyProductAction.success(getMyProductResponse));
    successCallback?.(getMyProductResponse);
  } catch (err) {
    yield put(getMyProductAction.failure(err));
    failedCallback?.(err);
  }
}
