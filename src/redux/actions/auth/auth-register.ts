import { createActionCreator } from 'deox';

import { TAuthRegisterMaterials, TAuthRegisterResponse } from '@/services/api/auth/auth-register';

// CONSTANTS

export enum EAuthRegisterAction {
  AUTH_REGISTER = 'AUTH_REGISTER',
  AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST',
  AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS',
  AUTH_REGISTER_FAILED = 'AUTH_REGISTER_FAILED',
}

// TYPES

export type TAuthRegisterRequest = {
  type: EAuthRegisterAction.AUTH_REGISTER_REQUEST;
  payload: {
    materials: TAuthRegisterMaterials;
    successCallback?: (response: TAuthRegisterResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthRegisterSuccess = {
  type: EAuthRegisterAction.AUTH_REGISTER_SUCCESS;
  payload: { response: TAuthRegisterResponse };
};

export type TAuthRegisterFailed = { type: EAuthRegisterAction.AUTH_REGISTER_FAILED };

// FUNCTION

export const authRegisterAction = {
  request: createActionCreator(
    EAuthRegisterAction.AUTH_REGISTER_REQUEST,
    (resolve) =>
      (
        materials: TAuthRegisterMaterials,
        successCallback?: (response: TAuthRegisterResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthRegisterRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthRegisterAction.AUTH_REGISTER_SUCCESS,
    (resolve) =>
      (response: TAuthRegisterResponse): TAuthRegisterSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthRegisterAction.AUTH_REGISTER_FAILED,
    (resolve) =>
      (error: unknown): TAuthRegisterFailed =>
        resolve({ error }),
  ),
};
