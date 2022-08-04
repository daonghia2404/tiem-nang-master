import { createActionCreator } from 'deox';

import { TAuthForgotMaterials, TAuthForgotResponse } from '@/services/api/auth/auth-forgot';

// CONSTANTS

export enum EAuthForgotAction {
  AUTH_FORGOT = 'AUTH_FORGOT',
  AUTH_FORGOT_REQUEST = 'AUTH_FORGOT_REQUEST',
  AUTH_FORGOT_SUCCESS = 'AUTH_FORGOT_SUCCESS',
  AUTH_FORGOT_FAILED = 'AUTH_FORGOT_FAILED',
}

// TYPES

export type TAuthForgotRequest = {
  type: EAuthForgotAction.AUTH_FORGOT_REQUEST;
  payload: {
    materials: TAuthForgotMaterials;
    successCallback?: (response: TAuthForgotResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthForgotSuccess = {
  type: EAuthForgotAction.AUTH_FORGOT_SUCCESS;
  payload: { response: TAuthForgotResponse };
};

export type TAuthForgotFailed = { type: EAuthForgotAction.AUTH_FORGOT_FAILED };

// FUNCTION

export const authForgotAction = {
  request: createActionCreator(
    EAuthForgotAction.AUTH_FORGOT_REQUEST,
    (resolve) =>
      (
        materials: TAuthForgotMaterials,
        successCallback?: (response: TAuthForgotResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthForgotRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthForgotAction.AUTH_FORGOT_SUCCESS,
    (resolve) =>
      (response: TAuthForgotResponse): TAuthForgotSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthForgotAction.AUTH_FORGOT_FAILED,
    (resolve) =>
      (error: unknown): TAuthForgotFailed =>
        resolve({ error }),
  ),
};
