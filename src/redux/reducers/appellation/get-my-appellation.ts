import { TAppellationState } from '@/redux/reducers/appellation';
import { TGetMyAppellationSuccess } from '@/redux/actions/appellation';

export const getMyAppellationUpdateState = (
  state: TAppellationState,
  action: TGetMyAppellationSuccess,
): TAppellationState => ({
  ...state,
  getMyAppellationResponse: action.payload.response,
});
