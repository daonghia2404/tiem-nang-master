import { TNotificationState } from '@/redux/reducers/notification';
import { TGetNotificationsUnreadSuccess } from '@/redux/actions/notification';

export const getNotificationsUnreadUpdateState = (
  state: TNotificationState,
  action: TGetNotificationsUnreadSuccess,
): TNotificationState => ({
  ...state,
  getNotificationsUnreadResponse: action.payload.response,
});
