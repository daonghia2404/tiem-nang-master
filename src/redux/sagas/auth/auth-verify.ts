import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authVerifyAction } from '@/redux/actions';
import { authVerify, TAuthVerifyResponse } from '@/services/api';

// FUNCTION

export function* authVerifySaga(action: ActionType<typeof authVerifyAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authVerify, materials);
    const authVerifyResponse: TAuthVerifyResponse = response as TAuthVerifyResponse;
    yield put(authVerifyAction.success(authVerifyResponse));
    successCallback?.(authVerifyResponse);
  } catch (err) {
    yield put(authVerifyAction.failure(err));
    failedCallback?.(err);
  }
}
