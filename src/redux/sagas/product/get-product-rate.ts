import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProductRateAction } from '@/redux/actions';
import { getProductRate, TGetProductRateResponse } from '@/services/api';

// FUNCTION

export function* getProductRateSaga(action: ActionType<typeof getProductRateAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProductRate, materials);
    const getProductRateResponse: TGetProductRateResponse = response as TGetProductRateResponse;
    yield put(getProductRateAction.success(getProductRateResponse));
    successCallback?.(getProductRateResponse);
  } catch (err) {
    yield put(getProductRateAction.failure(err));
    failedCallback?.(err);
  }
}
