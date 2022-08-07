import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { saveProductAction } from '@/redux/actions';
import { saveProduct, TSaveProductResponse } from '@/services/api';

// FUNCTION

export function* saveProductSaga(action: ActionType<typeof saveProductAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(saveProduct, materials);
    const saveProductResponse: TSaveProductResponse = response as TSaveProductResponse;
    yield put(saveProductAction.success(saveProductResponse));
    successCallback?.(saveProductResponse);
  } catch (err) {
    yield put(saveProductAction.failure(err));
    failedCallback?.(err);
  }
}
