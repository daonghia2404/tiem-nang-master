import { createReducer } from 'deox';

import {
  TGetMembershipListResponse,
  TGetMyMembershipResponse,
  TUpdradeMyMembershipResponse,
} from '@/services/api/membership';
import { getMembershipListAction, getMyMembershipAction, updradeMyMembershipAction } from '@/redux/actions';
import { getMembershipListUpdateState } from './get-membership-list';
import { getMyMembershipUpdateState } from './get-my-membership';
import { updradeMyMembershipUpdateState } from './updrade-my-membership';

export type TMembershipState = {
  getMembershipListResponse?: TGetMembershipListResponse;
  getMyMembershipResponse?: TGetMyMembershipResponse;
  updradeMyMembershipResponse?: TUpdradeMyMembershipResponse;
};

const initialState: TMembershipState = {
  getMembershipListResponse: undefined,
  getMyMembershipResponse: undefined,
  updradeMyMembershipResponse: undefined,
};

const MembershipReducer = createReducer(initialState, (handleAction) => [
  handleAction(getMembershipListAction.success, getMembershipListUpdateState),
  handleAction(getMyMembershipAction.success, getMyMembershipUpdateState),
  handleAction(updradeMyMembershipAction.success, updradeMyMembershipUpdateState),
]);

export default MembershipReducer;
