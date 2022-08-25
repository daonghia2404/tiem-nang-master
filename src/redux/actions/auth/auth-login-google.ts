import { createActionCreator } from 'deox';

import { TAuthLoginGoogleMaterials, TAuthLoginGoogleResponse } from '@/services/api/auth/auth-login-google';

// CONSTANTS

export enum EAuthLoginGoogleAction {
  AUTH_LOGIN_GOOGLE = 'AUTH_LOGIN_GOOGLE',
  AUTH_LOGIN_GOOGLE_REQUEST = 'AUTH_LOGIN_GOOGLE_REQUEST',
  AUTH_LOGIN_GOOGLE_SUCCESS = 'AUTH_LOGIN_GOOGLE_SUCCESS',
  AUTH_LOGIN_GOOGLE_FAILED = 'AUTH_LOGIN_GOOGLE_FAILED',
}

// TYPES

export type TAuthLoginGoogleRequest = {
  type: EAuthLoginGoogleAction.AUTH_LOGIN_GOOGLE_REQUEST;
  payload: {
    materials: TAuthLoginGoogleMaterials;
    successCallback?: (response: TAuthLoginGoogleResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthLoginGoogleSuccess = {
  type: EAuthLoginGoogleAction.AUTH_LOGIN_GOOGLE_SUCCESS;
  payload: { response: TAuthLoginGoogleResponse };
};

export type TAuthLoginGoogleFailed = { type: EAuthLoginGoogleAction.AUTH_LOGIN_GOOGLE_FAILED };

// FUNCTION

export const authLoginGoogleAction = {
  request: createActionCreator(
    EAuthLoginGoogleAction.AUTH_LOGIN_GOOGLE_REQUEST,
    (resolve) =>
      (
        materials: TAuthLoginGoogleMaterials,
        successCallback?: (response: TAuthLoginGoogleResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthLoginGoogleRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthLoginGoogleAction.AUTH_LOGIN_GOOGLE_SUCCESS,
    (resolve) =>
      (response: TAuthLoginGoogleResponse): TAuthLoginGoogleSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthLoginGoogleAction.AUTH_LOGIN_GOOGLE_FAILED,
    (resolve) =>
      (error: unknown): TAuthLoginGoogleFailed =>
        resolve({ error }),
  ),
};
