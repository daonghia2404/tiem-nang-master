import { createReducer } from 'deox';

import { TGetAdvisoryIssuesResponse, TRequestAdvisoryResponse } from '@/services/api/advisory';
import { getAdvisoryIssuesAction, requestAdvisoryAction } from '@/redux/actions';
import { getAdvisoryIssuesUpdateState } from './get-advisory-issues';
import { requestAdvisoryUpdateState } from './request-advisory';

export type TAdvisoryState = {
  getAdvisoryIssuesResponse?: TGetAdvisoryIssuesResponse;
  requestAdvisoryResponse?: TRequestAdvisoryResponse;
};

const initialState: TAdvisoryState = {
  getAdvisoryIssuesResponse: undefined,
  requestAdvisoryResponse: undefined,
};

const AdvisoryReducer = createReducer(initialState, (handleAction) => [
  handleAction(getAdvisoryIssuesAction.success, getAdvisoryIssuesUpdateState),
  handleAction(requestAdvisoryAction.success, requestAdvisoryUpdateState),
]);

export default AdvisoryReducer;
