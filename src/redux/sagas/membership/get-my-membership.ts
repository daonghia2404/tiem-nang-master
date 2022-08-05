import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getMyMembershipAction } from '@/redux/actions';
import { getMyMembership, TGetMyMembershipResponse } from '@/services/api';

// FUNCTION

export function* getMyMembershipSaga(action: ActionType<typeof getMyMembershipAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getMyMembership, materials);
    const getMyMembershipResponse: TGetMyMembershipResponse = response as TGetMyMembershipResponse;
    yield put(getMyMembershipAction.success(getMyMembershipResponse));
    successCallback?.(getMyMembershipResponse);
  } catch (err) {
    yield put(getMyMembershipAction.failure(err));
    failedCallback?.(err);
  }
}
