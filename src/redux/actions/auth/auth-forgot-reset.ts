import { createActionCreator } from 'deox';

import { TAuthForgotResetMaterials, TAuthForgotResetResponse } from '@/services/api/auth/auth-forgot-reset';

// CONSTANTS

export enum EAuthForgotResetAction {
  AUTH_FORGOT_RESET = 'AUTH_FORGOT_RESET',
  AUTH_FORGOT_RESET_REQUEST = 'AUTH_FORGOT_RESET_REQUEST',
  AUTH_FORGOT_RESET_SUCCESS = 'AUTH_FORGOT_RESET_SUCCESS',
  AUTH_FORGOT_RESET_FAILED = 'AUTH_FORGOT_RESET_FAILED',
}

// TYPES

export type TAuthForgotResetRequest = {
  type: EAuthForgotResetAction.AUTH_FORGOT_RESET_REQUEST;
  payload: {
    materials: TAuthForgotResetMaterials;
    successCallback?: (response: TAuthForgotResetResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthForgotResetSuccess = {
  type: EAuthForgotResetAction.AUTH_FORGOT_RESET_SUCCESS;
  payload: { response: TAuthForgotResetResponse };
};

export type TAuthForgotResetFailed = { type: EAuthForgotResetAction.AUTH_FORGOT_RESET_FAILED };

// FUNCTION

export const authForgotResetAction = {
  request: createActionCreator(
    EAuthForgotResetAction.AUTH_FORGOT_RESET_REQUEST,
    (resolve) =>
      (
        materials: TAuthForgotResetMaterials,
        successCallback?: (response: TAuthForgotResetResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthForgotResetRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthForgotResetAction.AUTH_FORGOT_RESET_SUCCESS,
    (resolve) =>
      (response: TAuthForgotResetResponse): TAuthForgotResetSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthForgotResetAction.AUTH_FORGOT_RESET_FAILED,
    (resolve) =>
      (error: unknown): TAuthForgotResetFailed =>
        resolve({ error }),
  ),
};
