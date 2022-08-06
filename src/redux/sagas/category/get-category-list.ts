import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getCategoryListAction } from '@/redux/actions';
import { getCategoryList, TGetCategoryListResponse } from '@/services/api';

// FUNCTION

export function* getCategoryListSaga(action: ActionType<typeof getCategoryListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getCategoryList, materials);
    const getCategoryListResponse: TGetCategoryListResponse = response as TGetCategoryListResponse;
    yield put(getCategoryListAction.success(getCategoryListResponse));
    successCallback?.(getCategoryListResponse);
  } catch (err) {
    yield put(getCategoryListAction.failure(err));
    failedCallback?.(err);
  }
}
