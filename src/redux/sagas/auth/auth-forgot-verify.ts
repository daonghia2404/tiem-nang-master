import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authForgotVerifyAction } from '@/redux/actions';
import { authForgotVerify, TAuthForgotVerifyResponse } from '@/services/api';

// FUNCTION

export function* authForgotVerifySaga(action: ActionType<typeof authForgotVerifyAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authForgotVerify, materials);
    const authForgotVerifyResponse: TAuthForgotVerifyResponse = response as TAuthForgotVerifyResponse;
    yield put(authForgotVerifyAction.success(authForgotVerifyResponse));
    successCallback?.(authForgotVerifyResponse);
  } catch (err) {
    yield put(authForgotVerifyAction.failure(err));
    failedCallback?.(err);
  }
}
