import { createActionCreator } from 'deox';

import { TGetAdvisoryIssuesMaterials, TGetAdvisoryIssuesResponse } from '@/services/api/advisory/get-advisory-issues';

// CONSTANTS

export enum EGetAdvisoryIssuesAction {
  GET_ADVISORY_ISSUES = 'GET_ADVISORY_ISSUES',
  GET_ADVISORY_ISSUES_REQUEST = 'GET_ADVISORY_ISSUES_REQUEST',
  GET_ADVISORY_ISSUES_SUCCESS = 'GET_ADVISORY_ISSUES_SUCCESS',
  GET_ADVISORY_ISSUES_FAILED = 'GET_ADVISORY_ISSUES_FAILED',
}

// TYPES

export type TGetAdvisoryIssuesRequest = {
  type: EGetAdvisoryIssuesAction.GET_ADVISORY_ISSUES_REQUEST;
  payload: {
    materials: TGetAdvisoryIssuesMaterials;
    successCallback?: (response: TGetAdvisoryIssuesResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetAdvisoryIssuesSuccess = {
  type: EGetAdvisoryIssuesAction.GET_ADVISORY_ISSUES_SUCCESS;
  payload: { response: TGetAdvisoryIssuesResponse };
};

export type TGetAdvisoryIssuesFailed = { type: EGetAdvisoryIssuesAction.GET_ADVISORY_ISSUES_FAILED };

// FUNCTION

export const getAdvisoryIssuesAction = {
  request: createActionCreator(
    EGetAdvisoryIssuesAction.GET_ADVISORY_ISSUES_REQUEST,
    (resolve) =>
      (
        materials: TGetAdvisoryIssuesMaterials,
        successCallback?: (response: TGetAdvisoryIssuesResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetAdvisoryIssuesRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetAdvisoryIssuesAction.GET_ADVISORY_ISSUES_SUCCESS,
    (resolve) =>
      (response: TGetAdvisoryIssuesResponse): TGetAdvisoryIssuesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetAdvisoryIssuesAction.GET_ADVISORY_ISSUES_FAILED,
    (resolve) =>
      (error: unknown): TGetAdvisoryIssuesFailed =>
        resolve({ error }),
  ),
};
