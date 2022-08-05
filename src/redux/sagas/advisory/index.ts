import { all, takeLatest } from 'redux-saga/effects';

import { getAdvisoryIssuesAction, requestAdvisoryAction } from '@/redux/actions';

import { getAdvisoryIssuesSaga } from './get-advisory-issues';
import { requestAdvisorySaga } from './request-advisory';

export default function* root(): Generator {
  yield all([
    takeLatest(getAdvisoryIssuesAction.request.type, getAdvisoryIssuesSaga),
    takeLatest(requestAdvisoryAction.request.type, requestAdvisorySaga),
  ]);
}
