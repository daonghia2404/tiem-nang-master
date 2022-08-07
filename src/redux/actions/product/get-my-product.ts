import { createActionCreator } from 'deox';

import { TGetMyProductMaterials, TGetMyProductResponse } from '@/services/api/product/get-my-product';

// CONSTANTS

export enum EGetMyProductAction {
  GET_MY_PRODUCT = 'GET_MY_PRODUCT',
  GET_MY_PRODUCT_REQUEST = 'GET_MY_PRODUCT_REQUEST',
  GET_MY_PRODUCT_SUCCESS = 'GET_MY_PRODUCT_SUCCESS',
  GET_MY_PRODUCT_FAILED = 'GET_MY_PRODUCT_FAILED',
}

// TYPES

export type TGetMyProductRequest = {
  type: EGetMyProductAction.GET_MY_PRODUCT_REQUEST;
  payload: {
    materials: TGetMyProductMaterials;
    successCallback?: (response: TGetMyProductResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyProductSuccess = {
  type: EGetMyProductAction.GET_MY_PRODUCT_SUCCESS;
  payload: { response: TGetMyProductResponse };
};

export type TGetMyProductFailed = { type: EGetMyProductAction.GET_MY_PRODUCT_FAILED };

// FUNCTION

export const getMyProductAction = {
  request: createActionCreator(
    EGetMyProductAction.GET_MY_PRODUCT_REQUEST,
    (resolve) =>
      (
        materials: TGetMyProductMaterials,
        successCallback?: (response: TGetMyProductResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyProductRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyProductAction.GET_MY_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TGetMyProductResponse): TGetMyProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyProductAction.GET_MY_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TGetMyProductFailed =>
        resolve({ error }),
  ),
};
