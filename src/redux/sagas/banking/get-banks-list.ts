import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getBanksListAction } from '@/redux/actions';
import { getBanksList, TGetBanksListResponse } from '@/services/api';

// FUNCTION

export function* getBanksListSaga(action: ActionType<typeof getBanksListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getBanksList, materials);
    const getBanksListResponse: TGetBanksListResponse = response as TGetBanksListResponse;
    yield put(getBanksListAction.success(getBanksListResponse));
    successCallback?.(getBanksListResponse);
  } catch (err) {
    yield put(getBanksListAction.failure(err));
    failedCallback?.(err);
  }
}
