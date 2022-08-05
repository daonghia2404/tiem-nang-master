import { createActionCreator } from 'deox';

import {
  TUpdradeMyMembershipMaterials,
  TUpdradeMyMembershipResponse,
} from '@/services/api/membership/updrade-my-membership';

// CONSTANTS

export enum EUpdradeMyMembershipAction {
  UPDRADE_MY_MEMBERSHIP = 'UPDRADE_MY_MEMBERSHIP',
  UPDRADE_MY_MEMBERSHIP_REQUEST = 'UPDRADE_MY_MEMBERSHIP_REQUEST',
  UPDRADE_MY_MEMBERSHIP_SUCCESS = 'UPDRADE_MY_MEMBERSHIP_SUCCESS',
  UPDRADE_MY_MEMBERSHIP_FAILED = 'UPDRADE_MY_MEMBERSHIP_FAILED',
}

// TYPES

export type TUpdradeMyMembershipRequest = {
  type: EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP_REQUEST;
  payload: {
    materials: TUpdradeMyMembershipMaterials;
    successCallback?: (response: TUpdradeMyMembershipResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TUpdradeMyMembershipSuccess = {
  type: EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP_SUCCESS;
  payload: { response: TUpdradeMyMembershipResponse };
};

export type TUpdradeMyMembershipFailed = { type: EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP_FAILED };

// FUNCTION

export const updradeMyMembershipAction = {
  request: createActionCreator(
    EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP_REQUEST,
    (resolve) =>
      (
        materials: TUpdradeMyMembershipMaterials,
        successCallback?: (response: TUpdradeMyMembershipResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TUpdradeMyMembershipRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP_SUCCESS,
    (resolve) =>
      (response: TUpdradeMyMembershipResponse): TUpdradeMyMembershipSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP_FAILED,
    (resolve) =>
      (error: unknown): TUpdradeMyMembershipFailed =>
        resolve({ error }),
  ),
};
