import { createReducer } from 'deox';

import {
  TGetNotificationsUnreadResponse,
  TGetNotificationsResponse,
  TReadNotificationResponse,
} from '@/services/api/notification';
import { getNotificationsUnreadAction, getNotificationsAction, readNotificationAction } from '@/redux/actions';
import { getNotificationsUnreadUpdateState } from './get-notifications-unread';
import { getNotificationsUpdateState } from './get-notifications';
import { readNotificationUpdateState } from './read-notification';

export type TNotificationState = {
  getNotificationsUnreadResponse?: TGetNotificationsUnreadResponse;
  getNotificationsResponse?: TGetNotificationsResponse;
  readNotificationResponse?: TReadNotificationResponse;
};

const initialState: TNotificationState = {
  getNotificationsUnreadResponse: undefined,
  getNotificationsResponse: undefined,
  readNotificationResponse: undefined,
};

const NotificationReducer = createReducer(initialState, (handleAction) => [
  handleAction(getNotificationsUnreadAction.success, getNotificationsUnreadUpdateState),
  handleAction(getNotificationsAction.success, getNotificationsUpdateState),
  handleAction(readNotificationAction.success, readNotificationUpdateState),
]);

export default NotificationReducer;
