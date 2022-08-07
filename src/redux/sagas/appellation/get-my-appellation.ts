import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyAppellationAction } from '@/redux/actions';
import { getMyAppellation, TGetMyAppellationResponse } from '@/services/api';

// FUNCTION

export function* getMyAppellationSaga(action: ActionType<typeof getMyAppellationAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyAppellation, materials);
    const getMyAppellationResponse: TGetMyAppellationResponse = response as TGetMyAppellationResponse;
    yield put(getMyAppellationAction.success(getMyAppellationResponse));
    successCallback?.(getMyAppellationResponse);
  } catch (err) {
    yield put(getMyAppellationAction.failure(err));
    failedCallback?.(err);
  }
}
