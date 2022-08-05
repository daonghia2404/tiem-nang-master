import { TNotificationState } from '@/redux/reducers/notification';
import { TReadNotificationSuccess } from '@/redux/actions/notification';

export const readNotificationUpdateState = (
  state: TNotificationState,
  action: TReadNotificationSuccess,
): TNotificationState => ({
  ...state,
  readNotificationResponse: action.payload.response,
});
