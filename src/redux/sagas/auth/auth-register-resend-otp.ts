import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authRegisterResendOtpAction } from '@/redux/actions';
import { authRegisterResendOtp, TAuthRegisterResendOtpResponse } from '@/services/api';

// FUNCTION

export function* authRegisterResendOtpSaga(action: ActionType<typeof authRegisterResendOtpAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authRegisterResendOtp, materials);
    const authRegisterResendOtpResponse: TAuthRegisterResendOtpResponse = response as TAuthRegisterResendOtpResponse;
    yield put(authRegisterResendOtpAction.success(authRegisterResendOtpResponse));
    successCallback?.(authRegisterResendOtpResponse);
  } catch (err) {
    yield put(authRegisterResendOtpAction.failure(err));
    failedCallback?.(err);
  }
}
