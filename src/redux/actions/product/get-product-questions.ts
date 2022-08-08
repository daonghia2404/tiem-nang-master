import { createActionCreator } from 'deox';

import {
  TGetProductQuestionsMaterials,
  TGetProductQuestionsResponse,
} from '@/services/api/product/get-product-questions';

// CONSTANTS

export enum EGetProductQuestionsAction {
  GET_PRODUCT_QUESTIONS = 'GET_PRODUCT_QUESTIONS',
  GET_PRODUCT_QUESTIONS_REQUEST = 'GET_PRODUCT_QUESTIONS_REQUEST',
  GET_PRODUCT_QUESTIONS_SUCCESS = 'GET_PRODUCT_QUESTIONS_SUCCESS',
  GET_PRODUCT_QUESTIONS_FAILED = 'GET_PRODUCT_QUESTIONS_FAILED',
}

// TYPES

export type TGetProductQuestionsRequest = {
  type: EGetProductQuestionsAction.GET_PRODUCT_QUESTIONS_REQUEST;
  payload: {
    materials: TGetProductQuestionsMaterials;
    successCallback?: (response: TGetProductQuestionsResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetProductQuestionsSuccess = {
  type: EGetProductQuestionsAction.GET_PRODUCT_QUESTIONS_SUCCESS;
  payload: { response: TGetProductQuestionsResponse };
};

export type TGetProductQuestionsFailed = { type: EGetProductQuestionsAction.GET_PRODUCT_QUESTIONS_FAILED };

// FUNCTION

export const getProductQuestionsAction = {
  request: createActionCreator(
    EGetProductQuestionsAction.GET_PRODUCT_QUESTIONS_REQUEST,
    (resolve) =>
      (
        materials: TGetProductQuestionsMaterials,
        successCallback?: (response: TGetProductQuestionsResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetProductQuestionsRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetProductQuestionsAction.GET_PRODUCT_QUESTIONS_SUCCESS,
    (resolve) =>
      (response: TGetProductQuestionsResponse): TGetProductQuestionsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetProductQuestionsAction.GET_PRODUCT_QUESTIONS_FAILED,
    (resolve) =>
      (error: unknown): TGetProductQuestionsFailed =>
        resolve({ error }),
  ),
};
