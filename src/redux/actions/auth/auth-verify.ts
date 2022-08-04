import { createActionCreator } from 'deox';

import { TAuthVerifyMaterials, TAuthVerifyResponse } from '@/services/api/auth/auth-verify';

// CONSTANTS

export enum EAuthVerifyAction {
  AUTH_VERIFY = 'AUTH_VERIFY',
  AUTH_VERIFY_REQUEST = 'AUTH_VERIFY_REQUEST',
  AUTH_VERIFY_SUCCESS = 'AUTH_VERIFY_SUCCESS',
  AUTH_VERIFY_FAILED = 'AUTH_VERIFY_FAILED',
}

// TYPES

export type TAuthVerifyRequest = {
  type: EAuthVerifyAction.AUTH_VERIFY_REQUEST;
  payload: {
    materials: TAuthVerifyMaterials;
    successCallback?: (response: TAuthVerifyResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAuthVerifySuccess = {
  type: EAuthVerifyAction.AUTH_VERIFY_SUCCESS;
  payload: { response: TAuthVerifyResponse };
};

export type TAuthVerifyFailed = { type: EAuthVerifyAction.AUTH_VERIFY_FAILED };

// FUNCTION

export const authVerifyAction = {
  request: createActionCreator(
    EAuthVerifyAction.AUTH_VERIFY_REQUEST,
    (resolve) =>
      (
        materials: TAuthVerifyMaterials,
        successCallback?: (response: TAuthVerifyResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAuthVerifyRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAuthVerifyAction.AUTH_VERIFY_SUCCESS,
    (resolve) =>
      (response: TAuthVerifyResponse): TAuthVerifySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthVerifyAction.AUTH_VERIFY_FAILED,
    (resolve) =>
      (error: unknown): TAuthVerifyFailed =>
        resolve({ error }),
  ),
};
