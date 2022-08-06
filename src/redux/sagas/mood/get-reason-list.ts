import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getReasonListAction } from '@/redux/actions';
import { getReasonList, TGetReasonListResponse } from '@/services/api';

// FUNCTION

export function* getReasonListSaga(action: ActionType<typeof getReasonListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getReasonList, materials);
    const getReasonListResponse: TGetReasonListResponse = response as TGetReasonListResponse;
    yield put(getReasonListAction.success(getReasonListResponse));
    successCallback?.(getReasonListResponse);
  } catch (err) {
    yield put(getReasonListAction.failure(err));
    failedCallback?.(err);
  }
}
