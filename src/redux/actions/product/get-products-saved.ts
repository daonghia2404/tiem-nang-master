import { createActionCreator } from 'deox';

import { TGetProductsSavedMaterials, TGetProductsSavedResponse } from '@/services/api/product/get-products-saved';

// CONSTANTS

export enum EGetProductsSavedAction {
  GET_PRODUCTS_SAVED = 'GET_PRODUCTS_SAVED',
  GET_PRODUCTS_SAVED_REQUEST = 'GET_PRODUCTS_SAVED_REQUEST',
  GET_PRODUCTS_SAVED_SUCCESS = 'GET_PRODUCTS_SAVED_SUCCESS',
  GET_PRODUCTS_SAVED_FAILED = 'GET_PRODUCTS_SAVED_FAILED',
}

// TYPES

export type TGetProductsSavedRequest = {
  type: EGetProductsSavedAction.GET_PRODUCTS_SAVED_REQUEST;
  payload: {
    materials: TGetProductsSavedMaterials;
    successCallback?: (response: TGetProductsSavedResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProductsSavedSuccess = {
  type: EGetProductsSavedAction.GET_PRODUCTS_SAVED_SUCCESS;
  payload: { response: TGetProductsSavedResponse };
};

export type TGetProductsSavedFailed = { type: EGetProductsSavedAction.GET_PRODUCTS_SAVED_FAILED };

// FUNCTION

export const getProductsSavedAction = {
  request: createActionCreator(
    EGetProductsSavedAction.GET_PRODUCTS_SAVED_REQUEST,
    (resolve) =>
      (
        materials: TGetProductsSavedMaterials,
        successCallback?: (response: TGetProductsSavedResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProductsSavedRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProductsSavedAction.GET_PRODUCTS_SAVED_SUCCESS,
    (resolve) =>
      (response: TGetProductsSavedResponse): TGetProductsSavedSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProductsSavedAction.GET_PRODUCTS_SAVED_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsSavedFailed =>
        resolve({ error }),
  ),
};
