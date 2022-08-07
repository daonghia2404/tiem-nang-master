import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { rateProductAction } from '@/redux/actions';
import { rateProduct, TRateProductResponse } from '@/services/api';

// FUNCTION

export function* rateProductSaga(action: ActionType<typeof rateProductAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(rateProduct, materials);
    const rateProductResponse: TRateProductResponse = response as TRateProductResponse;
    yield put(rateProductAction.success(rateProductResponse));
    successCallback?.(rateProductResponse);
  } catch (err) {
    yield put(rateProductAction.failure(err));
    failedCallback?.(err);
  }
}
