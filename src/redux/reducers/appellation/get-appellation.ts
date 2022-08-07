import { TAppellationState } from '@/redux/reducers/appellation';
import { TGetAppellationSuccess } from '@/redux/actions/appellation';

export const getAppellationUpdateState = (
  state: TAppellationState,
  action: TGetAppellationSuccess,
): TAppellationState => ({
  ...state,
  getAppellationResponse: action.payload.response,
});
