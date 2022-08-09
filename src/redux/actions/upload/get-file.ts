import { createActionCreator } from 'deox';

import { TGetFileMaterials, TGetFileResponse } from '@/services/api/upload/get-file';

// CONSTANTS

export enum EGetFileAction {
  GET_FILE = 'GET_FILE',
  GET_FILE_REQUEST = 'GET_FILE_REQUEST',
  GET_FILE_SUCCESS = 'GET_FILE_SUCCESS',
  GET_FILE_FAILED = 'GET_FILE_FAILED',
}

// TYPES

export type TGetFileRequest = {
  type: EGetFileAction.GET_FILE_REQUEST;
  payload: {
    materials: TGetFileMaterials;
    successCallback?: (response: TGetFileResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetFileSuccess = {
  type: EGetFileAction.GET_FILE_SUCCESS;
  payload: { response: TGetFileResponse };
};

export type TGetFileFailed = { type: EGetFileAction.GET_FILE_FAILED };

// FUNCTION

export const getFileAction = {
  request: createActionCreator(
    EGetFileAction.GET_FILE_REQUEST,
    (resolve) =>
      (
        materials: TGetFileMaterials,
        successCallback?: (response: TGetFileResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetFileRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetFileAction.GET_FILE_SUCCESS,
    (resolve) =>
      (response: TGetFileResponse): TGetFileSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetFileAction.GET_FILE_FAILED,
    (resolve) =>
      (error: unknown): TGetFileFailed =>
        resolve({ error }),
  ),
};
