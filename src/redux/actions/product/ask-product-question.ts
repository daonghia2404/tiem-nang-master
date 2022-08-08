import { createActionCreator } from 'deox';

import { TAskProductQuestionMaterials, TAskProductQuestionResponse } from '@/services/api/product/ask-product-question';

// CONSTANTS

export enum EAskProductQuestionAction {
  ASK_PRODUCT_QUESTION = 'ASK_PRODUCT_QUESTION',
  ASK_PRODUCT_QUESTION_REQUEST = 'ASK_PRODUCT_QUESTION_REQUEST',
  ASK_PRODUCT_QUESTION_SUCCESS = 'ASK_PRODUCT_QUESTION_SUCCESS',
  ASK_PRODUCT_QUESTION_FAILED = 'ASK_PRODUCT_QUESTION_FAILED',
}

// TYPES

export type TAskProductQuestionRequest = {
  type: EAskProductQuestionAction.ASK_PRODUCT_QUESTION_REQUEST;
  payload: {
    materials: TAskProductQuestionMaterials;
    successCallback?: (response: TAskProductQuestionResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TAskProductQuestionSuccess = {
  type: EAskProductQuestionAction.ASK_PRODUCT_QUESTION_SUCCESS;
  payload: { response: TAskProductQuestionResponse };
};

export type TAskProductQuestionFailed = { type: EAskProductQuestionAction.ASK_PRODUCT_QUESTION_FAILED };

// FUNCTION

export const askProductQuestionAction = {
  request: createActionCreator(
    EAskProductQuestionAction.ASK_PRODUCT_QUESTION_REQUEST,
    (resolve) =>
      (
        materials: TAskProductQuestionMaterials,
        successCallback?: (response: TAskProductQuestionResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TAskProductQuestionRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EAskProductQuestionAction.ASK_PRODUCT_QUESTION_SUCCESS,
    (resolve) =>
      (response: TAskProductQuestionResponse): TAskProductQuestionSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAskProductQuestionAction.ASK_PRODUCT_QUESTION_FAILED,
    (resolve) =>
      (error: unknown): TAskProductQuestionFailed =>
        resolve({ error }),
  ),
};
