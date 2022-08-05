import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMembershipListAction } from '@/redux/actions';
import { getMembershipList, TGetMembershipListResponse } from '@/services/api';

// FUNCTION

export function* getMembershipListSaga(action: ActionType<typeof getMembershipListAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMembershipList, materials);
    const getMembershipListResponse: TGetMembershipListResponse = response as TGetMembershipListResponse;
    yield put(getMembershipListAction.success(getMembershipListResponse));
    successCallback?.(getMembershipListResponse);
  } catch (err) {
    yield put(getMembershipListAction.failure(err));
    failedCallback?.(err);
  }
}
