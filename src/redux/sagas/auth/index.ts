import { all, takeLatest } from 'redux-saga/effects';

import {
  authForgotResendOtpAction,
  authForgotResetAction,
  authForgotVerifyAction,
  authForgotAction,
  authLoginFacebookAction,
  authLoginGoogleAction,
  authLoginAction,
  authLogoutAction,
  authRegisterResendOtpAction,
  authRegisterAction,
  authVerifyAction,
} from '@/redux/actions';

import { authForgotResendOtpSaga } from './auth-forgot-resend-otp';
import { authForgotResetSaga } from './auth-forgot-reset';
import { authForgotVerifySaga } from './auth-forgot-verify';
import { authForgotSaga } from './auth-forgot';
import { authLoginFacebookSaga } from './auth-login-facebook';
import { authLoginGoogleSaga } from './auth-login-google';
import { authLoginSaga } from './auth-login';
import { authLogoutSaga } from './auth-logout';
import { authRegisterResendOtpSaga } from './auth-register-resend-otp';
import { authRegisterSaga } from './auth-register';
import { authVerifySaga } from './auth-verify';

export default function* root(): Generator {
  yield all([
    takeLatest(authForgotResendOtpAction.request.type, authForgotResendOtpSaga),
    takeLatest(authForgotResetAction.request.type, authForgotResetSaga),
    takeLatest(authForgotVerifyAction.request.type, authForgotVerifySaga),
    takeLatest(authForgotAction.request.type, authForgotSaga),
    takeLatest(authLoginFacebookAction.request.type, authLoginFacebookSaga),
    takeLatest(authLoginGoogleAction.request.type, authLoginGoogleSaga),
    takeLatest(authLoginAction.request.type, authLoginSaga),
    takeLatest(authLogoutAction.request.type, authLogoutSaga),
    takeLatest(authRegisterResendOtpAction.request.type, authRegisterResendOtpSaga),
    takeLatest(authRegisterAction.request.type, authRegisterSaga),
    takeLatest(authVerifyAction.request.type, authVerifySaga),
  ]);
}
