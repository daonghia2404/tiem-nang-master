import { createActionCreator } from 'deox';

import {
  TGetFilterProductListMaterials,
  TGetFilterProductListResponse,
} from '@/services/api/product/get-filter-product-list';

// CONSTANTS

export enum EGetFilterProductListAction {
  GET_FILTER_PRODUCT_LIST = 'GET_FILTER_PRODUCT_LIST',
  GET_FILTER_PRODUCT_LIST_REQUEST = 'GET_FILTER_PRODUCT_LIST_REQUEST',
  GET_FILTER_PRODUCT_LIST_SUCCESS = 'GET_FILTER_PRODUCT_LIST_SUCCESS',
  GET_FILTER_PRODUCT_LIST_FAILED = 'GET_FILTER_PRODUCT_LIST_FAILED',
}

// TYPES

export type TGetFilterProductListRequest = {
  type: EGetFilterProductListAction.GET_FILTER_PRODUCT_LIST_REQUEST;
  payload: {
    materials: TGetFilterProductListMaterials;
    successCallback?: (response: TGetFilterProductListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetFilterProductListSuccess = {
  type: EGetFilterProductListAction.GET_FILTER_PRODUCT_LIST_SUCCESS;
  payload: { response: TGetFilterProductListResponse };
};

export type TGetFilterProductListFailed = { type: EGetFilterProductListAction.GET_FILTER_PRODUCT_LIST_FAILED };

// FUNCTION

export const getFilterProductListAction = {
  request: createActionCreator(
    EGetFilterProductListAction.GET_FILTER_PRODUCT_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetFilterProductListMaterials,
        successCallback?: (response: TGetFilterProductListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetFilterProductListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetFilterProductListAction.GET_FILTER_PRODUCT_LIST_SUCCESS,
    (resolve) =>
      (response: TGetFilterProductListResponse): TGetFilterProductListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetFilterProductListAction.GET_FILTER_PRODUCT_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetFilterProductListFailed =>
        resolve({ error }),
  ),
};
