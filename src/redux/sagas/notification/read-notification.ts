import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { readNotificationAction } from '@/redux/actions';
import { readNotification, TReadNotificationResponse } from '@/services/api';

// FUNCTION

export function* readNotificationSaga(action: ActionType<typeof readNotificationAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(readNotification, materials);
    const readNotificationResponse: TReadNotificationResponse = response as TReadNotificationResponse;
    yield put(readNotificationAction.success(readNotificationResponse));
    successCallback?.(readNotificationResponse);
  } catch (err) {
    yield put(readNotificationAction.failure(err));
    failedCallback?.(err);
  }
}
