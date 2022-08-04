import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authRegisterAction } from '@/redux/actions';
import { authRegister, TAuthRegisterResponse } from '@/services/api';

// FUNCTION

export function* authRegisterSaga(action: ActionType<typeof authRegisterAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authRegister, materials);
    const authRegisterResponse: TAuthRegisterResponse = response as TAuthRegisterResponse;
    yield put(authRegisterAction.success(authRegisterResponse));
    successCallback?.(authRegisterResponse);
  } catch (err) {
    yield put(authRegisterAction.failure(err));
    failedCallback?.(err);
  }
}
