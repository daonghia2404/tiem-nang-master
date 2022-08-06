import { createActionCreator } from 'deox';

import { TGetReasonListMaterials, TGetReasonListResponse } from '@/services/api/mood/get-reason-list';

// CONSTANTS

export enum EGetReasonListAction {
  GET_REASON_LIST = 'GET_REASON_LIST',
  GET_REASON_LIST_REQUEST = 'GET_REASON_LIST_REQUEST',
  GET_REASON_LIST_SUCCESS = 'GET_REASON_LIST_SUCCESS',
  GET_REASON_LIST_FAILED = 'GET_REASON_LIST_FAILED',
}

// TYPES

export type TGetReasonListRequest = {
  type: EGetReasonListAction.GET_REASON_LIST_REQUEST;
  payload: {
    materials: TGetReasonListMaterials;
    successCallback?: (response: TGetReasonListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetReasonListSuccess = {
  type: EGetReasonListAction.GET_REASON_LIST_SUCCESS;
  payload: { response: TGetReasonListResponse };
};

export type TGetReasonListFailed = { type: EGetReasonListAction.GET_REASON_LIST_FAILED };

// FUNCTION

export const getReasonListAction = {
  request: createActionCreator(
    EGetReasonListAction.GET_REASON_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetReasonListMaterials,
        successCallback?: (response: TGetReasonListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetReasonListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetReasonListAction.GET_REASON_LIST_SUCCESS,
    (resolve) =>
      (response: TGetReasonListResponse): TGetReasonListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetReasonListAction.GET_REASON_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetReasonListFailed =>
        resolve({ error }),
  ),
};
