import { createActionCreator } from 'deox';

import { TGetCategoryListMaterials, TGetCategoryListResponse } from '@/services/api/category/get-category-list';

// CONSTANTS

export enum EGetCategoryListAction {
  GET_CATEGORY_LIST = 'GET_CATEGORY_LIST',
  GET_CATEGORY_LIST_REQUEST = 'GET_CATEGORY_LIST_REQUEST',
  GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS',
  GET_CATEGORY_LIST_FAILED = 'GET_CATEGORY_LIST_FAILED',
}

// TYPES

export type TGetCategoryListRequest = {
  type: EGetCategoryListAction.GET_CATEGORY_LIST_REQUEST;
  payload: {
    materials: TGetCategoryListMaterials;
    successCallback?: (response: TGetCategoryListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetCategoryListSuccess = {
  type: EGetCategoryListAction.GET_CATEGORY_LIST_SUCCESS;
  payload: { response: TGetCategoryListResponse };
};

export type TGetCategoryListFailed = { type: EGetCategoryListAction.GET_CATEGORY_LIST_FAILED };

// FUNCTION

export const getCategoryListAction = {
  request: createActionCreator(
    EGetCategoryListAction.GET_CATEGORY_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetCategoryListMaterials,
        successCallback?: (response: TGetCategoryListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetCategoryListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetCategoryListAction.GET_CATEGORY_LIST_SUCCESS,
    (resolve) =>
      (response: TGetCategoryListResponse): TGetCategoryListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetCategoryListAction.GET_CATEGORY_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetCategoryListFailed =>
        resolve({ error }),
  ),
};
