import { createActionCreator } from 'deox';

import { TGetApophthganMaterials, TGetApophthganResponse } from '@/services/api/apophthgan/get-apophthgan';

// CONSTANTS

export enum EGetApophthganAction {
  GET_APOPHTHGAN = 'GET_APOPHTHGAN',
  GET_APOPHTHGAN_REQUEST = 'GET_APOPHTHGAN_REQUEST',
  GET_APOPHTHGAN_SUCCESS = 'GET_APOPHTHGAN_SUCCESS',
  GET_APOPHTHGAN_FAILED = 'GET_APOPHTHGAN_FAILED',
}

// TYPES

export type TGetApophthganRequest = {
  type: EGetApophthganAction.GET_APOPHTHGAN_REQUEST;
  payload: {
    materials: TGetApophthganMaterials;
    successCallback?: (response: TGetApophthganResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetApophthganSuccess = {
  type: EGetApophthganAction.GET_APOPHTHGAN_SUCCESS;
  payload: { response?: TGetApophthganResponse };
};

export type TGetApophthganFailed = { type: EGetApophthganAction.GET_APOPHTHGAN_FAILED };

// FUNCTION

export const getApophthganAction = {
  request: createActionCreator(
    EGetApophthganAction.GET_APOPHTHGAN_REQUEST,
    (resolve) =>
      (
        materials: TGetApophthganMaterials,
        successCallback?: (response: TGetApophthganResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetApophthganRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetApophthganAction.GET_APOPHTHGAN_SUCCESS,
    (resolve) =>
      (response?: TGetApophthganResponse): TGetApophthganSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetApophthganAction.GET_APOPHTHGAN_FAILED,
    (resolve) =>
      (error: unknown): TGetApophthganFailed =>
        resolve({ error }),
  ),
};
