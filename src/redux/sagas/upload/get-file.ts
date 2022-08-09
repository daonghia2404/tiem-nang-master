import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getFileAction } from '@/redux/actions';
import { getFile, TGetFileResponse } from '@/services/api';

// FUNCTION

export function* getFileSaga(action: ActionType<typeof getFileAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getFile, materials);
    const getFileResponse: TGetFileResponse = response as TGetFileResponse;
    yield put(getFileAction.success(getFileResponse));
    successCallback?.(getFileResponse);
  } catch (err) {
    yield put(getFileAction.failure(err));
    failedCallback?.(err);
  }
}
