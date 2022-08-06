import { TMoodState } from '@/redux/reducers/mood';
import { TGetMoodListSuccess } from '@/redux/actions/mood';

export const getMoodListUpdateState = (state: TMoodState, action: TGetMoodListSuccess): TMoodState => ({
  ...state,
  getMoodListResponse: action.payload.response,
});
