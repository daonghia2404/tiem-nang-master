import { createActionCreator } from 'deox';

import { TGetAppellationMaterials, TGetAppellationResponse } from '@/services/api/appellation/get-appellation';

// CONSTANTS

export enum EGetAppellationAction {
  GET_APPELLATION = 'GET_APPELLATION',
  GET_APPELLATION_REQUEST = 'GET_APPELLATION_REQUEST',
  GET_APPELLATION_SUCCESS = 'GET_APPELLATION_SUCCESS',
  GET_APPELLATION_FAILED = 'GET_APPELLATION_FAILED',
}

// TYPES

export type TGetAppellationRequest = {
  type: EGetAppellationAction.GET_APPELLATION_REQUEST;
  payload: {
    materials: TGetAppellationMaterials;
    successCallback?: (response: TGetAppellationResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetAppellationSuccess = {
  type: EGetAppellationAction.GET_APPELLATION_SUCCESS;
  payload: { response: TGetAppellationResponse };
};

export type TGetAppellationFailed = { type: EGetAppellationAction.GET_APPELLATION_FAILED };

// FUNCTION

export const getAppellationAction = {
  request: createActionCreator(
    EGetAppellationAction.GET_APPELLATION_REQUEST,
    (resolve) =>
      (
        materials: TGetAppellationMaterials,
        successCallback?: (response: TGetAppellationResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetAppellationRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetAppellationAction.GET_APPELLATION_SUCCESS,
    (resolve) =>
      (response: TGetAppellationResponse): TGetAppellationSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetAppellationAction.GET_APPELLATION_FAILED,
    (resolve) =>
      (error: unknown): TGetAppellationFailed =>
        resolve({ error }),
  ),
};
