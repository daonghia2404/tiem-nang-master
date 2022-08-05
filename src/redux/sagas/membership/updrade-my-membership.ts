import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { updradeMyMembershipAction } from '@/redux/actions';
import { updradeMyMembership, TUpdradeMyMembershipResponse } from '@/services/api';

// FUNCTION

export function* updradeMyMembershipSaga(action: ActionType<typeof updradeMyMembershipAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(updradeMyMembership, materials);
    const updradeMyMembershipResponse: TUpdradeMyMembershipResponse = response as TUpdradeMyMembershipResponse;
    yield put(updradeMyMembershipAction.success(updradeMyMembershipResponse));
    successCallback?.(updradeMyMembershipResponse);
  } catch (err) {
    yield put(updradeMyMembershipAction.failure(err));
    failedCallback?.(err);
  }
}
