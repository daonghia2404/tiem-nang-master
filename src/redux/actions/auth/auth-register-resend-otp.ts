import { createActionCreator } from 'deox';

import {
  TAuthRegisterResendOtpMaterials,
  TAuthRegisterResendOtpResponse,
} from '@/services/api/auth/auth-register-resend-otp';

// CONSTANTS

export enum EAuthRegisterResendOtpAction {
  AUTH_REGISTER_RESEND_OTP = 'AUTH_REGISTER_RESEND_OTP',
  AUTH_REGISTER_RESEND_OTP_REQUEST = 'AUTH_REGISTER_RESEND_OTP_REQUEST',
  AUTH_REGISTER_RESEND_OTP_SUCCESS = 'AUTH_REGISTER_RESEND_OTP_SUCCESS',
  AUTH_REGISTER_RESEND_OTP_FAILED = 'AUTH_REGISTER_RESEND_OTP_FAILED',
}

// TYPES

export type TAuthRegisterResendOtpRequest = {
  type: EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP_REQUEST;
  payload: {
    materials: TAuthRegisterResendOtpMaterials;
    successCallback?: (response: TAuthRegisterResendOtpResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthRegisterResendOtpSuccess = {
  type: EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP_SUCCESS;
  payload: { response: TAuthRegisterResendOtpResponse };
};

export type TAuthRegisterResendOtpFailed = { type: EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP_FAILED };

// FUNCTION

export const authRegisterResendOtpAction = {
  request: createActionCreator(
    EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP_REQUEST,
    (resolve) =>
      (
        materials: TAuthRegisterResendOtpMaterials,
        successCallback?: (response: TAuthRegisterResendOtpResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthRegisterResendOtpRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP_SUCCESS,
    (resolve) =>
      (response: TAuthRegisterResendOtpResponse): TAuthRegisterResendOtpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP_FAILED,
    (resolve) =>
      (error: unknown): TAuthRegisterResendOtpFailed =>
        resolve({ error }),
  ),
};
