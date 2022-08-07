import { createActionCreator } from 'deox';

import { TSaveProductMaterials, TSaveProductResponse } from '@/services/api/product/save-product';

// CONSTANTS

export enum ESaveProductAction {
  SAVE_PRODUCT = 'SAVE_PRODUCT',
  SAVE_PRODUCT_REQUEST = 'SAVE_PRODUCT_REQUEST',
  SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS',
  SAVE_PRODUCT_FAILED = 'SAVE_PRODUCT_FAILED',
}

// TYPES

export type TSaveProductRequest = {
  type: ESaveProductAction.SAVE_PRODUCT_REQUEST;
  payload: {
    materials: TSaveProductMaterials;
    successCallback?: (response: TSaveProductResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TSaveProductSuccess = {
  type: ESaveProductAction.SAVE_PRODUCT_SUCCESS;
  payload: { response: TSaveProductResponse };
};

export type TSaveProductFailed = { type: ESaveProductAction.SAVE_PRODUCT_FAILED };

// FUNCTION

export const saveProductAction = {
  request: createActionCreator(
    ESaveProductAction.SAVE_PRODUCT_REQUEST,
    (resolve) =>
      (
        materials: TSaveProductMaterials,
        successCallback?: (response: TSaveProductResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TSaveProductRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    ESaveProductAction.SAVE_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TSaveProductResponse): TSaveProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ESaveProductAction.SAVE_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TSaveProductFailed =>
        resolve({ error }),
  ),
};
