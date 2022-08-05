import { createActionCreator } from 'deox';

import { TRequestAdvisoryMaterials, TRequestAdvisoryResponse } from '@/services/api/advisory/request-advisory';

// CONSTANTS

export enum ERequestAdvisoryAction {
  REQUEST_ADVISORY = 'REQUEST_ADVISORY',
  REQUEST_ADVISORY_REQUEST = 'REQUEST_ADVISORY_REQUEST',
  REQUEST_ADVISORY_SUCCESS = 'REQUEST_ADVISORY_SUCCESS',
  REQUEST_ADVISORY_FAILED = 'REQUEST_ADVISORY_FAILED',
}

// TYPES

export type TRequestAdvisoryRequest = {
  type: ERequestAdvisoryAction.REQUEST_ADVISORY_REQUEST;
  payload: {
    materials: TRequestAdvisoryMaterials;
    successCallback?: (response: TRequestAdvisoryResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRequestAdvisorySuccess = {
  type: ERequestAdvisoryAction.REQUEST_ADVISORY_SUCCESS;
  payload: { response: TRequestAdvisoryResponse };
};

export type TRequestAdvisoryFailed = { type: ERequestAdvisoryAction.REQUEST_ADVISORY_FAILED };

// FUNCTION

export const requestAdvisoryAction = {
  request: createActionCreator(
    ERequestAdvisoryAction.REQUEST_ADVISORY_REQUEST,
    (resolve) =>
      (
        materials: TRequestAdvisoryMaterials,
        successCallback?: (response: TRequestAdvisoryResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRequestAdvisoryRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERequestAdvisoryAction.REQUEST_ADVISORY_SUCCESS,
    (resolve) =>
      (response: TRequestAdvisoryResponse): TRequestAdvisorySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERequestAdvisoryAction.REQUEST_ADVISORY_FAILED,
    (resolve) =>
      (error: unknown): TRequestAdvisoryFailed =>
        resolve({ error }),
  ),
};
