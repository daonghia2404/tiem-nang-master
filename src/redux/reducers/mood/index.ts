import { createReducer } from 'deox';

import { TGetMoodListResponse, TGetReasonListResponse } from '@/services/api/mood';
import { getMoodListAction, getReasonListAction } from '@/redux/actions';
import { getMoodListUpdateState } from './get-mood-list';
import { getReasonListUpdateState } from './get-reason-list';

export type TMoodState = {
  getMoodListResponse?: TGetMoodListResponse;
  getReasonListResponse?: TGetReasonListResponse;
};

const initialState: TMoodState = {
  getMoodListResponse: undefined,
  getReasonListResponse: undefined,
};

const MoodReducer = createReducer(initialState, (handleAction) => [
  handleAction(getMoodListAction.success, getMoodListUpdateState),
  handleAction(getReasonListAction.success, getReasonListUpdateState),
]);

export default MoodReducer;
