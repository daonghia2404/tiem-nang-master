import { TAdvisoryState } from '@/redux/reducers/advisory';
import { TGetAdvisoryIssuesSuccess } from '@/redux/actions/advisory';

export const getAdvisoryIssuesUpdateState = (
  state: TAdvisoryState,
  action: TGetAdvisoryIssuesSuccess,
): TAdvisoryState => ({
  ...state,
  getAdvisoryIssuesResponse: action.payload.response,
});
