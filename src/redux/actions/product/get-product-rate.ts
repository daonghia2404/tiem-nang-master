import { createActionCreator } from 'deox';

import { TGetProductRateMaterials, TGetProductRateResponse } from '@/services/api/product/get-product-rate';

// CONSTANTS

export enum EGetProductRateAction {
  GET_PRODUCT_RATE = 'GET_PRODUCT_RATE',
  GET_PRODUCT_RATE_REQUEST = 'GET_PRODUCT_RATE_REQUEST',
  GET_PRODUCT_RATE_SUCCESS = 'GET_PRODUCT_RATE_SUCCESS',
  GET_PRODUCT_RATE_FAILED = 'GET_PRODUCT_RATE_FAILED',
}

// TYPES

export type TGetProductRateRequest = {
  type: EGetProductRateAction.GET_PRODUCT_RATE_REQUEST;
  payload: {
    materials: TGetProductRateMaterials;
    successCallback?: (response: TGetProductRateResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProductRateSuccess = {
  type: EGetProductRateAction.GET_PRODUCT_RATE_SUCCESS;
  payload: { response: TGetProductRateResponse };
};

export type TGetProductRateFailed = { type: EGetProductRateAction.GET_PRODUCT_RATE_FAILED };

// FUNCTION

export const getProductRateAction = {
  request: createActionCreator(
    EGetProductRateAction.GET_PRODUCT_RATE_REQUEST,
    (resolve) =>
      (
        materials: TGetProductRateMaterials,
        successCallback?: (response: TGetProductRateResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProductRateRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProductRateAction.GET_PRODUCT_RATE_SUCCESS,
    (resolve) =>
      (response: TGetProductRateResponse): TGetProductRateSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProductRateAction.GET_PRODUCT_RATE_FAILED,
    (resolve) =>
      (error: unknown): TGetProductRateFailed =>
        resolve({ error }),
  ),
};
