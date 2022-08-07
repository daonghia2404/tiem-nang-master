import { createActionCreator } from 'deox';

import { TGetBanksListMaterials, TGetBanksListResponse } from '@/services/api/banking/get-banks-list';

// CONSTANTS

export enum EGetBanksListAction {
  GET_BANKS_LIST = 'GET_BANKS_LIST',
  GET_BANKS_LIST_REQUEST = 'GET_BANKS_LIST_REQUEST',
  GET_BANKS_LIST_SUCCESS = 'GET_BANKS_LIST_SUCCESS',
  GET_BANKS_LIST_FAILED = 'GET_BANKS_LIST_FAILED',
}

// TYPES

export type TGetBanksListRequest = {
  type: EGetBanksListAction.GET_BANKS_LIST_REQUEST;
  payload: {
    materials: TGetBanksListMaterials;
    successCallback?: (response: TGetBanksListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetBanksListSuccess = {
  type: EGetBanksListAction.GET_BANKS_LIST_SUCCESS;
  payload: { response: TGetBanksListResponse };
};

export type TGetBanksListFailed = { type: EGetBanksListAction.GET_BANKS_LIST_FAILED };

// FUNCTION

export const getBanksListAction = {
  request: createActionCreator(
    EGetBanksListAction.GET_BANKS_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetBanksListMaterials,
        successCallback?: (response: TGetBanksListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetBanksListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetBanksListAction.GET_BANKS_LIST_SUCCESS,
    (resolve) =>
      (response: TGetBanksListResponse): TGetBanksListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetBanksListAction.GET_BANKS_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetBanksListFailed =>
        resolve({ error }),
  ),
};
