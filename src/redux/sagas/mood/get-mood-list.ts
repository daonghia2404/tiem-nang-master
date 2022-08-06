import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMoodListAction } from '@/redux/actions';
import { getMoodList, TGetMoodListResponse } from '@/services/api';

// FUNCTION

export function* getMoodListSaga(action: ActionType<typeof getMoodListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMoodList, materials);
    const getMoodListResponse: TGetMoodListResponse = response as TGetMoodListResponse;
    yield put(getMoodListAction.success(getMoodListResponse));
    successCallback?.(getMoodListResponse);
  } catch (err) {
    yield put(getMoodListAction.failure(err));
    failedCallback?.(err);
  }
}
