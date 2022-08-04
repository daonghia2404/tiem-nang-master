import { createReducer } from 'deox';

import {
  TAuthForgotResendOtpResponse,
  TAuthForgotResetResponse,
  TAuthForgotVerifyResponse,
  TAuthForgotResponse,
  TAuthLoginResponse,
  TAuthRegisterResendOtpResponse,
  TAuthRegisterResponse,
  TAuthVerifyResponse,
} from '@/services/api/auth';
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
import { authForgotResendOtpUpdateState } from './auth-forgot-resend-otp';
import { authForgotResetUpdateState } from './auth-forgot-reset';
import { authForgotVerifyUpdateState } from './auth-forgot-verify';
import { authForgotUpdateState } from './auth-forgot';
import { authLoginUpdateState } from './auth-login';
import { authRegisterResendOtpUpdateState } from './auth-register-resend-otp';
import { authRegisterUpdateState } from './auth-register';
import { authVerifyUpdateState } from './auth-verify';

export type TAuthState = {
  authForgotResendOtpResponse?: TAuthForgotResendOtpResponse;
  authForgotResetResponse?: TAuthForgotResetResponse;
  authForgotVerifyResponse?: TAuthForgotVerifyResponse;
  authForgotResponse?: TAuthForgotResponse;
  authLoginResponse?: TAuthLoginResponse;
  authRegisterResendOtpResponse?: TAuthRegisterResendOtpResponse;
  authRegisterResponse?: TAuthRegisterResponse;
  authVerifyResponse?: TAuthVerifyResponse;
};

const initialState: TAuthState = {
  authForgotResendOtpResponse: undefined,
  authForgotResetResponse: undefined,
  authForgotVerifyResponse: undefined,
  authForgotResponse: undefined,
  authLoginResponse: undefined,
  authRegisterResendOtpResponse: undefined,
  authRegisterResponse: undefined,
  authVerifyResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(authForgotResendOtpAction.success, authForgotResendOtpUpdateState),
  handleAction(authForgotResetAction.success, authForgotResetUpdateState),
  handleAction(authForgotVerifyAction.success, authForgotVerifyUpdateState),
  handleAction(authForgotAction.success, authForgotUpdateState),
  handleAction(authLoginAction.success, authLoginUpdateState),
  handleAction(authRegisterResendOtpAction.success, authRegisterResendOtpUpdateState),
  handleAction(authRegisterAction.success, authRegisterUpdateState),
  handleAction(authVerifyAction.success, authVerifyUpdateState),
]);

export default AuthReducer;
