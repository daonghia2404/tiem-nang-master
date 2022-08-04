import { all, takeLatest } from 'redux-saga/effects';

import {
  authForgotResendOtpAction,
  authForgotResetAction,
  authForgotVerifyAction,
  authForgotAction,
  authLoginAction,
  authRegisterResendOtpAction,
  authRegisterAction,
  authVerifyAction,
} from '@/redux/actions';

import { authForgotResendOtpSaga } from './auth-forgot-resend-otp';
import { authForgotResetSaga } from './auth-forgot-reset';
import { authForgotVerifySaga } from './auth-forgot-verify';
import { authForgotSaga } from './auth-forgot';
import { authLoginSaga } from './auth-login';
import { authRegisterResendOtpSaga } from './auth-register-resend-otp';
import { authRegisterSaga } from './auth-register';
import { authVerifySaga } from './auth-verify';

export default function* root(): Generator {
  yield all([
    takeLatest(authForgotResendOtpAction.request.type, authForgotResendOtpSaga),
    takeLatest(authForgotResetAction.request.type, authForgotResetSaga),
    takeLatest(authForgotVerifyAction.request.type, authForgotVerifySaga),
    takeLatest(authForgotAction.request.type, authForgotSaga),
    takeLatest(authLoginAction.request.type, authLoginSaga),
    takeLatest(authRegisterResendOtpAction.request.type, authRegisterResendOtpSaga),
    takeLatest(authRegisterAction.request.type, authRegisterSaga),
    takeLatest(authVerifyAction.request.type, authVerifySaga),
  ]);
}
