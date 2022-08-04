import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authForgotAction } from '@/redux/actions';
import { authForgot, TAuthForgotResponse } from '@/services/api';

// FUNCTION

export function* authForgotSaga(action: ActionType<typeof authForgotAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authForgot, materials);
    const authForgotResponse: TAuthForgotResponse = response as TAuthForgotResponse;
    yield put(authForgotAction.success(authForgotResponse));
    successCallback?.(authForgotResponse);
  } catch (err) {
    yield put(authForgotAction.failure(err));
    failedCallback?.(err);
  }
}
