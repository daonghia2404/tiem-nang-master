import { TMembershipState } from '@/redux/reducers/membership';
import { TGetMembershipListSuccess } from '@/redux/actions/membership';

export const getMembershipListUpdateState = (
  state: TMembershipState,
  action: TGetMembershipListSuccess,
): TMembershipState => ({
  ...state,
  getMembershipListResponse: action.payload.response,
});
