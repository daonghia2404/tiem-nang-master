import { createActionCreator } from 'deox';

import { TBuyProductMaterials, TBuyProductResponse } from '@/services/api/product/buy-product';

// CONSTANTS

export enum EBuyProductAction {
  BUY_PRODUCT = 'BUY_PRODUCT',
  BUY_PRODUCT_REQUEST = 'BUY_PRODUCT_REQUEST',
  BUY_PRODUCT_SUCCESS = 'BUY_PRODUCT_SUCCESS',
  BUY_PRODUCT_FAILED = 'BUY_PRODUCT_FAILED',
}

// TYPES

export type TBuyProductRequest = {
  type: EBuyProductAction.BUY_PRODUCT_REQUEST;
  payload: {
    materials: TBuyProductMaterials;
    successCallback?: (response: TBuyProductResponse) => void;
    failedCallback?: (err: Error) => void;
  };
};

export type TBuyProductSuccess = {
  type: EBuyProductAction.BUY_PRODUCT_SUCCESS;
  payload: { response: TBuyProductResponse };
};

export type TBuyProductFailed = { type: EBuyProductAction.BUY_PRODUCT_FAILED };

// FUNCTION

export const buyProductAction = {
  request: createActionCreator(
    EBuyProductAction.BUY_PRODUCT_REQUEST,
    (resolve) =>
      (
        materials: TBuyProductMaterials,
        successCallback?: (response: TBuyProductResponse) => void,
        failedCallback?: (err: Error) => void,
      ): TBuyProductRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EBuyProductAction.BUY_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TBuyProductResponse): TBuyProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBuyProductAction.BUY_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TBuyProductFailed =>
        resolve({ error }),
  ),
};
