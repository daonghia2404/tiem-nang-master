import { createActionCreator } from 'deox';

import { TGetMyAppellationMaterials, TGetMyAppellationResponse } from '@/services/api/appellation/get-my-appellation';

// CONSTANTS

export enum EGetMyAppellationAction {
  GET_MY_APPELLATION = 'GET_MY_APPELLATION',
  GET_MY_APPELLATION_REQUEST = 'GET_MY_APPELLATION_REQUEST',
  GET_MY_APPELLATION_SUCCESS = 'GET_MY_APPELLATION_SUCCESS',
  GET_MY_APPELLATION_FAILED = 'GET_MY_APPELLATION_FAILED',
}

// TYPES

export type TGetMyAppellationRequest = {
  type: EGetMyAppellationAction.GET_MY_APPELLATION_REQUEST;
  payload: {
    materials: TGetMyAppellationMaterials;
    successCallback?: (response: TGetMyAppellationResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyAppellationSuccess = {
  type: EGetMyAppellationAction.GET_MY_APPELLATION_SUCCESS;
  payload: { response: TGetMyAppellationResponse };
};

export type TGetMyAppellationFailed = { type: EGetMyAppellationAction.GET_MY_APPELLATION_FAILED };

// FUNCTION

export const getMyAppellationAction = {
  request: createActionCreator(
    EGetMyAppellationAction.GET_MY_APPELLATION_REQUEST,
    (resolve) =>
      (
        materials: TGetMyAppellationMaterials,
        successCallback?: (response: TGetMyAppellationResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyAppellationRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyAppellationAction.GET_MY_APPELLATION_SUCCESS,
    (resolve) =>
      (response: TGetMyAppellationResponse): TGetMyAppellationSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyAppellationAction.GET_MY_APPELLATION_FAILED,
    (resolve) =>
      (error: unknown): TGetMyAppellationFailed =>
        resolve({ error }),
  ),
};
