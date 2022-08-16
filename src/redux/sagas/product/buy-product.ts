import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { buyProductAction } from '@/redux/actions';
import { buyProduct, TBuyProductResponse } from '@/services/api';

// FUNCTION

export function* buyProductSaga(action: ActionType<typeof buyProductAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(buyProduct, materials);
    const buyProductResponse: TBuyProductResponse = response as TBuyProductResponse;
    yield put(buyProductAction.success(buyProductResponse));
    successCallback?.(buyProductResponse);
  } catch (err) {
    yield put(buyProductAction.failure(err));
    failedCallback?.(err as Error);
  }
}
