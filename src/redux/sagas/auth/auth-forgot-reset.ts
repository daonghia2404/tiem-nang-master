import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authForgotResetAction } from '@/redux/actions';
import { authForgotReset, TAuthForgotResetResponse } from '@/services/api';

// FUNCTION

export function* authForgotResetSaga(action: ActionType<typeof authForgotResetAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authForgotReset, materials);
    const authForgotResetResponse: TAuthForgotResetResponse = response as TAuthForgotResetResponse;
    yield put(authForgotResetAction.success(authForgotResetResponse));
    successCallback?.(authForgotResetResponse);
  } catch (err) {
    yield put(authForgotResetAction.failure(err));
    failedCallback?.(err);
  }
}
