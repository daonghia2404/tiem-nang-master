import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getAppellationAction } from '@/redux/actions';
import { getAppellation, TGetAppellationResponse } from '@/services/api';

// FUNCTION

export function* getAppellationSaga(action: ActionType<typeof getAppellationAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getAppellation, materials);
    const getAppellationResponse: TGetAppellationResponse = response as TGetAppellationResponse;
    yield put(getAppellationAction.success(getAppellationResponse));
    successCallback?.(getAppellationResponse);
  } catch (err) {
    yield put(getAppellationAction.failure(err));
    failedCallback?.(err);
  }
}
