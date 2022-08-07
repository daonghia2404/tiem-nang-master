import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { unsaveProductAction } from '@/redux/actions';
import { unsaveProduct, TUnsaveProductResponse } from '@/services/api';

// FUNCTION

export function* unsaveProductSaga(action: ActionType<typeof unsaveProductAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(unsaveProduct, materials);
    const unsaveProductResponse: TUnsaveProductResponse = response as TUnsaveProductResponse;
    yield put(unsaveProductAction.success(unsaveProductResponse));
    successCallback?.(unsaveProductResponse);
  } catch (err) {
    yield put(unsaveProductAction.failure(err));
    failedCallback?.(err);
  }
}
