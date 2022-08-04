import { createActionCreator } from 'deox';

import {
  TAuthForgotResendOtpMaterials,
  TAuthForgotResendOtpResponse,
} from '@/services/api/auth/auth-forgot-resend-otp';

// CONSTANTS

export enum EAuthForgotResendOtpAction {
  AUTH_FORGOT_RESEND_OTP = 'AUTH_FORGOT_RESEND_OTP',
  AUTH_FORGOT_RESEND_OTP_REQUEST = 'AUTH_FORGOT_RESEND_OTP_REQUEST',
  AUTH_FORGOT_RESEND_OTP_SUCCESS = 'AUTH_FORGOT_RESEND_OTP_SUCCESS',
  AUTH_FORGOT_RESEND_OTP_FAILED = 'AUTH_FORGOT_RESEND_OTP_FAILED',
}

// TYPES

export type TAuthForgotResendOtpRequest = {
  type: EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP_REQUEST;
  payload: {
    materials: TAuthForgotResendOtpMaterials;
    successCallback?: (response: TAuthForgotResendOtpResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthForgotResendOtpSuccess = {
  type: EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP_SUCCESS;
  payload: { response: TAuthForgotResendOtpResponse };
};

export type TAuthForgotResendOtpFailed = { type: EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP_FAILED };

// FUNCTION

export const authForgotResendOtpAction = {
  request: createActionCreator(
    EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP_REQUEST,
    (resolve) =>
      (
        materials: TAuthForgotResendOtpMaterials,
        successCallback?: (response: TAuthForgotResendOtpResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthForgotResendOtpRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP_SUCCESS,
    (resolve) =>
      (response: TAuthForgotResendOtpResponse): TAuthForgotResendOtpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP_FAILED,
    (resolve) =>
      (error: unknown): TAuthForgotResendOtpFailed =>
        resolve({ error }),
  ),
};
