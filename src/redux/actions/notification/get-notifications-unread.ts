import { createActionCreator } from 'deox';

import {
  TGetNotificationsUnreadMaterials,
  TGetNotificationsUnreadResponse,
} from '@/services/api/notification/get-notifications-unread';

// CONSTANTS

export enum EGetNotificationsUnreadAction {
  GET_NOTIFICATIONS_UNREAD = 'GET_NOTIFICATIONS_UNREAD',
  GET_NOTIFICATIONS_UNREAD_REQUEST = 'GET_NOTIFICATIONS_UNREAD_REQUEST',
  GET_NOTIFICATIONS_UNREAD_SUCCESS = 'GET_NOTIFICATIONS_UNREAD_SUCCESS',
  GET_NOTIFICATIONS_UNREAD_FAILED = 'GET_NOTIFICATIONS_UNREAD_FAILED',
}

// TYPES

export type TGetNotificationsUnreadRequest = {
  type: EGetNotificationsUnreadAction.GET_NOTIFICATIONS_UNREAD_REQUEST;
  payload: {
    materials: TGetNotificationsUnreadMaterials;
    successCallback?: (response: TGetNotificationsUnreadResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetNotificationsUnreadSuccess = {
  type: EGetNotificationsUnreadAction.GET_NOTIFICATIONS_UNREAD_SUCCESS;
  payload: { response: TGetNotificationsUnreadResponse };
};

export type TGetNotificationsUnreadFailed = { type: EGetNotificationsUnreadAction.GET_NOTIFICATIONS_UNREAD_FAILED };

// FUNCTION

export const getNotificationsUnreadAction = {
  request: createActionCreator(
    EGetNotificationsUnreadAction.GET_NOTIFICATIONS_UNREAD_REQUEST,
    (resolve) =>
      (
        materials: TGetNotificationsUnreadMaterials,
        successCallback?: (response: TGetNotificationsUnreadResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetNotificationsUnreadRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetNotificationsUnreadAction.GET_NOTIFICATIONS_UNREAD_SUCCESS,
    (resolve) =>
      (response: TGetNotificationsUnreadResponse): TGetNotificationsUnreadSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetNotificationsUnreadAction.GET_NOTIFICATIONS_UNREAD_FAILED,
    (resolve) =>
      (error: unknown): TGetNotificationsUnreadFailed =>
        resolve({ error }),
  ),
};
