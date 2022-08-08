import { createActionCreator } from 'deox';

import {
  TDownloadProductFileMaterials,
  TDownloadProductFileResponse,
} from '@/services/api/product/download-product-file';

// CONSTANTS

export enum EDownloadProductFileAction {
  DOWNLOAD_PRODUCT_FILE = 'DOWNLOAD_PRODUCT_FILE',
  DOWNLOAD_PRODUCT_FILE_REQUEST = 'DOWNLOAD_PRODUCT_FILE_REQUEST',
  DOWNLOAD_PRODUCT_FILE_SUCCESS = 'DOWNLOAD_PRODUCT_FILE_SUCCESS',
  DOWNLOAD_PRODUCT_FILE_FAILED = 'DOWNLOAD_PRODUCT_FILE_FAILED',
}

// TYPES

export type TDownloadProductFileRequest = {
  type: EDownloadProductFileAction.DOWNLOAD_PRODUCT_FILE_REQUEST;
  payload: {
    materials: TDownloadProductFileMaterials;
    successCallback?: (response: TDownloadProductFileResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TDownloadProductFileSuccess = {
  type: EDownloadProductFileAction.DOWNLOAD_PRODUCT_FILE_SUCCESS;
  payload: { response: TDownloadProductFileResponse };
};

export type TDownloadProductFileFailed = { type: EDownloadProductFileAction.DOWNLOAD_PRODUCT_FILE_FAILED };

// FUNCTION

export const downloadProductFileAction = {
  request: createActionCreator(
    EDownloadProductFileAction.DOWNLOAD_PRODUCT_FILE_REQUEST,
    (resolve) =>
      (
        materials: TDownloadProductFileMaterials,
        successCallback?: (response: TDownloadProductFileResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TDownloadProductFileRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EDownloadProductFileAction.DOWNLOAD_PRODUCT_FILE_SUCCESS,
    (resolve) =>
      (response: TDownloadProductFileResponse): TDownloadProductFileSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EDownloadProductFileAction.DOWNLOAD_PRODUCT_FILE_FAILED,
    (resolve) =>
      (error: unknown): TDownloadProductFileFailed =>
        resolve({ error }),
  ),
};
