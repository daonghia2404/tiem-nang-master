import { createActionCreator } from 'deox';

import { TRateProductMaterials, TRateProductResponse } from '@/services/api/product/rate-product';

// CONSTANTS

export enum ERateProductAction {
  RATE_PRODUCT = 'RATE_PRODUCT',
  RATE_PRODUCT_REQUEST = 'RATE_PRODUCT_REQUEST',
  RATE_PRODUCT_SUCCESS = 'RATE_PRODUCT_SUCCESS',
  RATE_PRODUCT_FAILED = 'RATE_PRODUCT_FAILED',
}

// TYPES

export type TRateProductRequest = {
  type: ERateProductAction.RATE_PRODUCT_REQUEST;
  payload: {
    materials: TRateProductMaterials;
    successCallback?: (response: TRateProductResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TRateProductSuccess = {
  type: ERateProductAction.RATE_PRODUCT_SUCCESS;
  payload: { response: TRateProductResponse };
};

export type TRateProductFailed = { type: ERateProductAction.RATE_PRODUCT_FAILED };

// FUNCTION

export const rateProductAction = {
  request: createActionCreator(
    ERateProductAction.RATE_PRODUCT_REQUEST,
    (resolve) =>
      (
        materials: TRateProductMaterials,
        successCallback?: (response: TRateProductResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TRateProductRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ERateProductAction.RATE_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TRateProductResponse): TRateProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERateProductAction.RATE_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TRateProductFailed =>
        resolve({ error }),
  ),
};
