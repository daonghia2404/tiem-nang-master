import { createActionCreator } from 'deox';

import { TAuthForgotVerifyMaterials, TAuthForgotVerifyResponse } from '@/services/api/auth/auth-forgot-verify';

// CONSTANTS

export enum EAuthForgotVerifyAction {
  AUTH_FORGOT_VERIFY = 'AUTH_FORGOT_VERIFY',
  AUTH_FORGOT_VERIFY_REQUEST = 'AUTH_FORGOT_VERIFY_REQUEST',
  AUTH_FORGOT_VERIFY_SUCCESS = 'AUTH_FORGOT_VERIFY_SUCCESS',
  AUTH_FORGOT_VERIFY_FAILED = 'AUTH_FORGOT_VERIFY_FAILED',
}

// TYPES

export type TAuthForgotVerifyRequest = {
  type: EAuthForgotVerifyAction.AUTH_FORGOT_VERIFY_REQUEST;
  payload: {
    materials: TAuthForgotVerifyMaterials;
    successCallback?: (response: TAuthForgotVerifyResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthForgotVerifySuccess = {
  type: EAuthForgotVerifyAction.AUTH_FORGOT_VERIFY_SUCCESS;
  payload: { response: TAuthForgotVerifyResponse };
};

export type TAuthForgotVerifyFailed = { type: EAuthForgotVerifyAction.AUTH_FORGOT_VERIFY_FAILED };

// FUNCTION

export const authForgotVerifyAction = {
  request: createActionCreator(
    EAuthForgotVerifyAction.AUTH_FORGOT_VERIFY_REQUEST,
    (resolve) =>
      (
        materials: TAuthForgotVerifyMaterials,
        successCallback?: (response: TAuthForgotVerifyResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthForgotVerifyRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthForgotVerifyAction.AUTH_FORGOT_VERIFY_SUCCESS,
    (resolve) =>
      (response: TAuthForgotVerifyResponse): TAuthForgotVerifySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthForgotVerifyAction.AUTH_FORGOT_VERIFY_FAILED,
    (resolve) =>
      (error: unknown): TAuthForgotVerifyFailed =>
        resolve({ error }),
  ),
};
