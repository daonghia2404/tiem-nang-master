import { createActionCreator } from 'deox';

import { TAuthLoginFacebookMaterials, TAuthLoginFacebookResponse } from '@/services/api/auth/auth-login-facebook';

// CONSTANTS

export enum EAuthLoginFacebookAction {
  AUTH_LOGIN_FACEBOOK = 'AUTH_LOGIN_FACEBOOK',
  AUTH_LOGIN_FACEBOOK_REQUEST = 'AUTH_LOGIN_FACEBOOK_REQUEST',
  AUTH_LOGIN_FACEBOOK_SUCCESS = 'AUTH_LOGIN_FACEBOOK_SUCCESS',
  AUTH_LOGIN_FACEBOOK_FAILED = 'AUTH_LOGIN_FACEBOOK_FAILED',
}

// TYPES

export type TAuthLoginFacebookRequest = {
  type: EAuthLoginFacebookAction.AUTH_LOGIN_FACEBOOK_REQUEST;
  payload: {
    materials: TAuthLoginFacebookMaterials;
    successCallback?: (response: TAuthLoginFacebookResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthLoginFacebookSuccess = {
  type: EAuthLoginFacebookAction.AUTH_LOGIN_FACEBOOK_SUCCESS;
  payload: { response: TAuthLoginFacebookResponse };
};

export type TAuthLoginFacebookFailed = { type: EAuthLoginFacebookAction.AUTH_LOGIN_FACEBOOK_FAILED };

// FUNCTION

export const authLoginFacebookAction = {
  request: createActionCreator(
    EAuthLoginFacebookAction.AUTH_LOGIN_FACEBOOK_REQUEST,
    (resolve) =>
      (
        materials: TAuthLoginFacebookMaterials,
        successCallback?: (response: TAuthLoginFacebookResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthLoginFacebookRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthLoginFacebookAction.AUTH_LOGIN_FACEBOOK_SUCCESS,
    (resolve) =>
      (response: TAuthLoginFacebookResponse): TAuthLoginFacebookSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthLoginFacebookAction.AUTH_LOGIN_FACEBOOK_FAILED,
    (resolve) =>
      (error: unknown): TAuthLoginFacebookFailed =>
        resolve({ error }),
  ),
};
