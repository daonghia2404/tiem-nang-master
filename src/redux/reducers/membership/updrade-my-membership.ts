import { TMembershipState } from '@/redux/reducers/membership';
import { TUpdradeMyMembershipSuccess } from '@/redux/actions/membership';

export const updradeMyMembershipUpdateState = (
  state: TMembershipState,
  action: TUpdradeMyMembershipSuccess,
): TMembershipState => ({
  ...state,
  updradeMyMembershipResponse: action.payload.response,
});
