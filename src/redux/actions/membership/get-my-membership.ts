import { createActionCreator } from 'deox';

import { TGetMyMembershipMaterials, TGetMyMembershipResponse } from '@/services/api/membership/get-my-membership';

// CONSTANTS

export enum EGetMyMembershipAction {
  GET_MY_MEMBERSHIP = 'GET_MY_MEMBERSHIP',
  GET_MY_MEMBERSHIP_REQUEST = 'GET_MY_MEMBERSHIP_REQUEST',
  GET_MY_MEMBERSHIP_SUCCESS = 'GET_MY_MEMBERSHIP_SUCCESS',
  GET_MY_MEMBERSHIP_FAILED = 'GET_MY_MEMBERSHIP_FAILED',
}

// TYPES

export type TGetMyMembershipRequest = {
  type: EGetMyMembershipAction.GET_MY_MEMBERSHIP_REQUEST;
  payload: {
    materials: TGetMyMembershipMaterials;
    successCallback?: (response: TGetMyMembershipResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMyMembershipSuccess = {
  type: EGetMyMembershipAction.GET_MY_MEMBERSHIP_SUCCESS;
  payload: { response: TGetMyMembershipResponse };
};

export type TGetMyMembershipFailed = { type: EGetMyMembershipAction.GET_MY_MEMBERSHIP_FAILED };

// FUNCTION

export const getMyMembershipAction = {
  request: createActionCreator(
    EGetMyMembershipAction.GET_MY_MEMBERSHIP_REQUEST,
    (resolve) =>
      (
        materials: TGetMyMembershipMaterials,
        successCallback?: (response: TGetMyMembershipResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMyMembershipRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMyMembershipAction.GET_MY_MEMBERSHIP_SUCCESS,
    (resolve) =>
      (response: TGetMyMembershipResponse): TGetMyMembershipSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMyMembershipAction.GET_MY_MEMBERSHIP_FAILED,
    (resolve) =>
      (error: unknown): TGetMyMembershipFailed =>
        resolve({ error }),
  ),
};
