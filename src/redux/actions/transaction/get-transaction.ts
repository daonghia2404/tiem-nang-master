import { createActionCreator } from 'deox';

import { TGetTransactionMaterials, TGetTransactionResponse } from '@/services/api/transaction/get-transaction';

// CONSTANTS

export enum EGetTransactionAction {
  GET_TRANSACTION = 'GET_TRANSACTION',
  GET_TRANSACTION_REQUEST = 'GET_TRANSACTION_REQUEST',
  GET_TRANSACTION_SUCCESS = 'GET_TRANSACTION_SUCCESS',
  GET_TRANSACTION_FAILED = 'GET_TRANSACTION_FAILED',
}

// TYPES

export type TGetTransactionRequest = {
  type: EGetTransactionAction.GET_TRANSACTION_REQUEST;
  payload: {
    materials: TGetTransactionMaterials;
    successCallback?: (response: TGetTransactionResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetTransactionSuccess = {
  type: EGetTransactionAction.GET_TRANSACTION_SUCCESS;
  payload: { response: TGetTransactionResponse };
};

export type TGetTransactionFailed = { type: EGetTransactionAction.GET_TRANSACTION_FAILED };

// FUNCTION

export const getTransactionAction = {
  request: createActionCreator(
    EGetTransactionAction.GET_TRANSACTION_REQUEST,
    (resolve) =>
      (
        materials: TGetTransactionMaterials,
        successCallback?: (response: TGetTransactionResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetTransactionRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetTransactionAction.GET_TRANSACTION_SUCCESS,
    (resolve) =>
      (response: TGetTransactionResponse): TGetTransactionSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetTransactionAction.GET_TRANSACTION_FAILED,
    (resolve) =>
      (error: unknown): TGetTransactionFailed =>
        resolve({ error }),
  ),
};
