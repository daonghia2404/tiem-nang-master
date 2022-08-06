import { createActionCreator } from 'deox';

import { TGetProductsSearchMaterials, TGetProductsSearchResponse } from '@/services/api/product/get-products-search';

// CONSTANTS

export enum EGetProductsSearchAction {
  GET_PRODUCTS_SEARCH = 'GET_PRODUCTS_SEARCH',
  GET_PRODUCTS_SEARCH_REQUEST = 'GET_PRODUCTS_SEARCH_REQUEST',
  GET_PRODUCTS_SEARCH_SUCCESS = 'GET_PRODUCTS_SEARCH_SUCCESS',
  GET_PRODUCTS_SEARCH_FAILED = 'GET_PRODUCTS_SEARCH_FAILED',
}

// TYPES

export type TGetProductsSearchRequest = {
  type: EGetProductsSearchAction.GET_PRODUCTS_SEARCH_REQUEST;
  payload: {
    materials: TGetProductsSearchMaterials;
    successCallback?: (response: TGetProductsSearchResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProductsSearchSuccess = {
  type: EGetProductsSearchAction.GET_PRODUCTS_SEARCH_SUCCESS;
  payload: { response: TGetProductsSearchResponse };
};

export type TGetProductsSearchFailed = { type: EGetProductsSearchAction.GET_PRODUCTS_SEARCH_FAILED };

// FUNCTION

export const getProductsSearchAction = {
  request: createActionCreator(
    EGetProductsSearchAction.GET_PRODUCTS_SEARCH_REQUEST,
    (resolve) =>
      (
        materials: TGetProductsSearchMaterials,
        successCallback?: (response: TGetProductsSearchResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProductsSearchRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProductsSearchAction.GET_PRODUCTS_SEARCH_SUCCESS,
    (resolve) =>
      (response: TGetProductsSearchResponse): TGetProductsSearchSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProductsSearchAction.GET_PRODUCTS_SEARCH_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsSearchFailed =>
        resolve({ error }),
  ),
};
