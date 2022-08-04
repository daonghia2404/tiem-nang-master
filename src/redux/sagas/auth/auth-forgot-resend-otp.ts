import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authForgotResendOtpAction } from '@/redux/actions';
import { authForgotResendOtp, TAuthForgotResendOtpResponse } from '@/services/api';

// FUNCTION

export function* authForgotResendOtpSaga(action: ActionType<typeof authForgotResendOtpAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authForgotResendOtp, materials);
    const authForgotResendOtpResponse: TAuthForgotResendOtpResponse = response as TAuthForgotResendOtpResponse;
    yield put(authForgotResendOtpAction.success(authForgotResendOtpResponse));
    successCallback?.(authForgotResendOtpResponse);
  } catch (err) {
    yield put(authForgotResendOtpAction.failure(err));
    failedCallback?.(err);
  }
}
