import { createActionCreator } from 'deox';

import { TUnsaveProductMaterials, TUnsaveProductResponse } from '@/services/api/product/unsave-product';

// CONSTANTS

export enum EUnsaveProductAction {
  UNSAVE_PRODUCT = 'UNSAVE_PRODUCT',
  UNSAVE_PRODUCT_REQUEST = 'UNSAVE_PRODUCT_REQUEST',
  UNSAVE_PRODUCT_SUCCESS = 'UNSAVE_PRODUCT_SUCCESS',
  UNSAVE_PRODUCT_FAILED = 'UNSAVE_PRODUCT_FAILED',
}

// TYPES

export type TUnsaveProductRequest = {
  type: EUnsaveProductAction.UNSAVE_PRODUCT_REQUEST;
  payload: {
    materials: TUnsaveProductMaterials;
    successCallback?: (response: TUnsaveProductResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUnsaveProductSuccess = {
  type: EUnsaveProductAction.UNSAVE_PRODUCT_SUCCESS;
  payload: { response: TUnsaveProductResponse };
};

export type TUnsaveProductFailed = { type: EUnsaveProductAction.UNSAVE_PRODUCT_FAILED };

// FUNCTION

export const unsaveProductAction = {
  request: createActionCreator(
    EUnsaveProductAction.UNSAVE_PRODUCT_REQUEST,
    (resolve) =>
      (
        materials: TUnsaveProductMaterials,
        successCallback?: (response: TUnsaveProductResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUnsaveProductRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUnsaveProductAction.UNSAVE_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TUnsaveProductResponse): TUnsaveProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUnsaveProductAction.UNSAVE_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TUnsaveProductFailed =>
        resolve({ error }),
  ),
};
