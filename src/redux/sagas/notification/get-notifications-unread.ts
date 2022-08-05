import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getNotificationsUnreadAction } from '@/redux/actions';
import { getNotificationsUnread, TGetNotificationsUnreadResponse } from '@/services/api';

// FUNCTION

export function* getNotificationsUnreadSaga(
  action: ActionType<typeof getNotificationsUnreadAction.request>,
): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getNotificationsUnread, materials);
    const getNotificationsUnreadResponse: TGetNotificationsUnreadResponse = response as TGetNotificationsUnreadResponse;
    yield put(getNotificationsUnreadAction.success(getNotificationsUnreadResponse));
    successCallback?.(getNotificationsUnreadResponse);
  } catch (err) {
    yield put(getNotificationsUnreadAction.failure(err));
    failedCallback?.(err);
  }
}
