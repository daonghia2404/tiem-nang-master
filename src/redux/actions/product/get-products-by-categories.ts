import { createActionCreator } from 'deox';

import {
  TGetProductsByCategoriesMaterials,
  TGetProductsByCategoriesResponse,
} from '@/services/api/product/get-products-by-categories';

// CONSTANTS

export enum EGetProductsByCategoriesAction {
  GET_PRODUCTS_BY_CATEGORIES = 'GET_PRODUCTS_BY_CATEGORIES',
  GET_PRODUCTS_BY_CATEGORIES_REQUEST = 'GET_PRODUCTS_BY_CATEGORIES_REQUEST',
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS = 'GET_PRODUCTS_BY_CATEGORIES_SUCCESS',
  GET_PRODUCTS_BY_CATEGORIES_FAILED = 'GET_PRODUCTS_BY_CATEGORIES_FAILED',
}

// TYPES

export type TGetProductsByCategoriesRequest = {
  type: EGetProductsByCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_REQUEST;
  payload: {
    materials: TGetProductsByCategoriesMaterials;
    successCallback?: (response: TGetProductsByCategoriesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProductsByCategoriesSuccess = {
  type: EGetProductsByCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_SUCCESS;
  payload: { response?: TGetProductsByCategoriesResponse };
};

export type TGetProductsByCategoriesFailed = { type: EGetProductsByCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_FAILED };

// FUNCTION

export const getProductsByCategoriesAction = {
  request: createActionCreator(
    EGetProductsByCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_REQUEST,
    (resolve) =>
      (
        materials: TGetProductsByCategoriesMaterials,
        successCallback?: (response: TGetProductsByCategoriesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProductsByCategoriesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProductsByCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
    (resolve) =>
      (response?: TGetProductsByCategoriesResponse): TGetProductsByCategoriesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProductsByCategoriesAction.GET_PRODUCTS_BY_CATEGORIES_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsByCategoriesFailed =>
        resolve({ error }),
  ),
};
