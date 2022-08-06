import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getFilterProductListAction } from '@/redux/actions';
import { getFilterProductList, TGetFilterProductListResponse } from '@/services/api';

// FUNCTION

export function* getFilterProductListSaga(action: ActionType<typeof getFilterProductListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getFilterProductList, materials);
    const getFilterProductListResponse: TGetFilterProductListResponse = response as TGetFilterProductListResponse;
    yield put(getFilterProductListAction.success(getFilterProductListResponse));
    successCallback?.(getFilterProductListResponse);
  } catch (err) {
    yield put(getFilterProductListAction.failure(err));
    failedCallback?.(err);
  }
}
