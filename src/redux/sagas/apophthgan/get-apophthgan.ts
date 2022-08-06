import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getApophthganAction } from '@/redux/actions';
import { getApophthgan, TGetApophthganResponse } from '@/services/api';

// FUNCTION

export function* getApophthganSaga(action: ActionType<typeof getApophthganAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getApophthgan, materials);
    const getApophthganResponse: TGetApophthganResponse = response as TGetApophthganResponse;
    yield put(getApophthganAction.success(getApophthganResponse));
    successCallback?.(getApophthganResponse);
  } catch (err) {
    yield put(getApophthganAction.failure(err));
    failedCallback?.(err);
  }
}
