import { TMembershipState } from '@/redux/reducers/membership';
import { TGetMyMembershipSuccess } from '@/redux/actions/membership';

export const getMyMembershipUpdateState = (
  state: TMembershipState,
  action: TGetMyMembershipSuccess,
): TMembershipState => ({
  ...state,
  getMyMembershipResponse: action.payload.response,
});
