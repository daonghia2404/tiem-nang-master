import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { requestAdvisoryAction } from '@/redux/actions';
import { requestAdvisory, TRequestAdvisoryResponse } from '@/services/api';

// FUNCTION

export function* requestAdvisorySaga(action: ActionType<typeof requestAdvisoryAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(requestAdvisory, materials);
    const requestAdvisoryResponse: TRequestAdvisoryResponse = response as TRequestAdvisoryResponse;
    yield put(requestAdvisoryAction.success(requestAdvisoryResponse));
    successCallback?.(requestAdvisoryResponse);
  } catch (err) {
    yield put(requestAdvisoryAction.failure(err));
    failedCallback?.(err);
  }
}
