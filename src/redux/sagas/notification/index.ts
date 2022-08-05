import { all, takeLatest } from 'redux-saga/effects';

import { getNotificationsUnreadAction, getNotificationsAction, readNotificationAction } from '@/redux/actions';

import { getNotificationsUnreadSaga } from './get-notifications-unread';
import { getNotificationsSaga } from './get-notifications';
import { readNotificationSaga } from './read-notification';

export default function* root(): Generator {
  yield all([
    takeLatest(getNotificationsUnreadAction.request.type, getNotificationsUnreadSaga),
    takeLatest(getNotificationsAction.request.type, getNotificationsSaga),
    takeLatest(readNotificationAction.request.type, readNotificationSaga),
  ]);
}
