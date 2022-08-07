import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProductsSavedAction } from '@/redux/actions';
import { getProductsSaved, TGetProductsSavedResponse } from '@/services/api';

// FUNCTION

export function* getProductsSavedSaga(action: ActionType<typeof getProductsSavedAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProductsSaved, materials);
    const getProductsSavedResponse: TGetProductsSavedResponse = response as TGetProductsSavedResponse;
    yield put(getProductsSavedAction.success(getProductsSavedResponse));
    successCallback?.(getProductsSavedResponse);
  } catch (err) {
    yield put(getProductsSavedAction.failure(err));
    failedCallback?.(err);
  }
}
