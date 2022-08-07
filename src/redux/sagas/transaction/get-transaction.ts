import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getTransactionAction } from '@/redux/actions';
import { getTransaction, TGetTransactionResponse } from '@/services/api';

// FUNCTION

export function* getTransactionSaga(action: ActionType<typeof getTransactionAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getTransaction, materials);
    const getTransactionResponse: TGetTransactionResponse = response as TGetTransactionResponse;
    yield put(getTransactionAction.success(getTransactionResponse));
    successCallback?.(getTransactionResponse);
  } catch (err) {
    yield put(getTransactionAction.failure(err));
    failedCallback?.(err);
  }
}
