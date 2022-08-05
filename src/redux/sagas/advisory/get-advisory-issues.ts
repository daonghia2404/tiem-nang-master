import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getAdvisoryIssuesAction } from '@/redux/actions';
import { getAdvisoryIssues, TGetAdvisoryIssuesResponse } from '@/services/api';

// FUNCTION

export function* getAdvisoryIssuesSaga(action: ActionType<typeof getAdvisoryIssuesAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getAdvisoryIssues, materials);
    const getAdvisoryIssuesResponse: TGetAdvisoryIssuesResponse = response as TGetAdvisoryIssuesResponse;
    yield put(getAdvisoryIssuesAction.success(getAdvisoryIssuesResponse));
    successCallback?.(getAdvisoryIssuesResponse);
  } catch (err) {
    yield put(getAdvisoryIssuesAction.failure(err));
    failedCallback?.(err);
  }
}
