import { createActionCreator } from 'deox';

import { TReadNotificationMaterials, TReadNotificationResponse } from '@/services/api/notification/read-notification';

// CONSTANTS

export enum EReadNotificationAction {
  READ_NOTIFICATION = 'READ_NOTIFICATION',
  READ_NOTIFICATION_REQUEST = 'READ_NOTIFICATION_REQUEST',
  READ_NOTIFICATION_SUCCESS = 'READ_NOTIFICATION_SUCCESS',
  READ_NOTIFICATION_FAILED = 'READ_NOTIFICATION_FAILED',
}

// TYPES

export type TReadNotificationRequest = {
  type: EReadNotificationAction.READ_NOTIFICATION_REQUEST;
  payload: {
    materials: TReadNotificationMaterials;
    successCallback?: (response: TReadNotificationResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TReadNotificationSuccess = {
  type: EReadNotificationAction.READ_NOTIFICATION_SUCCESS;
  payload: { response: TReadNotificationResponse };
};

export type TReadNotificationFailed = { type: EReadNotificationAction.READ_NOTIFICATION_FAILED };

// FUNCTION

export const readNotificationAction = {
  request: createActionCreator(
    EReadNotificationAction.READ_NOTIFICATION_REQUEST,
    (resolve) =>
      (
        materials: TReadNotificationMaterials,
        successCallback?: (response: TReadNotificationResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TReadNotificationRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EReadNotificationAction.READ_NOTIFICATION_SUCCESS,
    (resolve) =>
      (response: TReadNotificationResponse): TReadNotificationSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EReadNotificationAction.READ_NOTIFICATION_FAILED,
    (resolve) =>
      (error: unknown): TReadNotificationFailed =>
        resolve({ error }),
  ),
};
