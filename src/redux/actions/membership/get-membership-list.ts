import { createActionCreator } from 'deox';

import { TGetMembershipListMaterials, TGetMembershipListResponse } from '@/services/api/membership/get-membership-list';

// CONSTANTS

export enum EGetMembershipListAction {
  GET_MEMBERSHIP_LIST = 'GET_MEMBERSHIP_LIST',
  GET_MEMBERSHIP_LIST_REQUEST = 'GET_MEMBERSHIP_LIST_REQUEST',
  GET_MEMBERSHIP_LIST_SUCCESS = 'GET_MEMBERSHIP_LIST_SUCCESS',
  GET_MEMBERSHIP_LIST_FAILED = 'GET_MEMBERSHIP_LIST_FAILED',
}

// TYPES

export type TGetMembershipListRequest = {
  type: EGetMembershipListAction.GET_MEMBERSHIP_LIST_REQUEST;
  payload: {
    materials: TGetMembershipListMaterials;
    successCallback?: (response: TGetMembershipListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMembershipListSuccess = {
  type: EGetMembershipListAction.GET_MEMBERSHIP_LIST_SUCCESS;
  payload: { response: TGetMembershipListResponse };
};

export type TGetMembershipListFailed = { type: EGetMembershipListAction.GET_MEMBERSHIP_LIST_FAILED };

// FUNCTION

export const getMembershipListAction = {
  request: createActionCreator(
    EGetMembershipListAction.GET_MEMBERSHIP_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetMembershipListMaterials,
        successCallback?: (response: TGetMembershipListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMembershipListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMembershipListAction.GET_MEMBERSHIP_LIST_SUCCESS,
    (resolve) =>
      (response: TGetMembershipListResponse): TGetMembershipListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMembershipListAction.GET_MEMBERSHIP_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetMembershipListFailed =>
        resolve({ error }),
  ),
};
