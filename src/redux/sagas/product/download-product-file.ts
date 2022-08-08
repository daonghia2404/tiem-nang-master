import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { downloadProductFileAction } from '@/redux/actions';
import { downloadProductFile, TDownloadProductFileResponse } from '@/services/api';

// FUNCTION

export function* downloadProductFileSaga(action: ActionType<typeof downloadProductFileAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(downloadProductFile, materials);
    const downloadProductFileResponse: TDownloadProductFileResponse = response as TDownloadProductFileResponse;
    yield put(downloadProductFileAction.success(downloadProductFileResponse));
    successCallback?.(downloadProductFileResponse);
  } catch (err) {
    yield put(downloadProductFileAction.failure(err));
    failedCallback?.(err);
  }
}
