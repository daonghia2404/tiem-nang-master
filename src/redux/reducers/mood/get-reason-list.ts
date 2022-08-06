import { TMoodState } from '@/redux/reducers/mood';
import { TGetReasonListSuccess } from '@/redux/actions/mood';

export const getReasonListUpdateState = (state: TMoodState, action: TGetReasonListSuccess): TMoodState => ({
  ...state,
  getReasonListResponse: action.payload.response,
});
