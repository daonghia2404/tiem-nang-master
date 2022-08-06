import { createActionCreator } from 'deox';

import { TGetMoodListMaterials, TGetMoodListResponse } from '@/services/api/mood/get-mood-list';

// CONSTANTS

export enum EGetMoodListAction {
  GET_MOOD_LIST = 'GET_MOOD_LIST',
  GET_MOOD_LIST_REQUEST = 'GET_MOOD_LIST_REQUEST',
  GET_MOOD_LIST_SUCCESS = 'GET_MOOD_LIST_SUCCESS',
  GET_MOOD_LIST_FAILED = 'GET_MOOD_LIST_FAILED',
}

// TYPES

export type TGetMoodListRequest = {
  type: EGetMoodListAction.GET_MOOD_LIST_REQUEST;
  payload: {
    materials: TGetMoodListMaterials;
    successCallback?: (response: TGetMoodListResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetMoodListSuccess = {
  type: EGetMoodListAction.GET_MOOD_LIST_SUCCESS;
  payload: { response: TGetMoodListResponse };
};

export type TGetMoodListFailed = { type: EGetMoodListAction.GET_MOOD_LIST_FAILED };

// FUNCTION

export const getMoodListAction = {
  request: createActionCreator(
    EGetMoodListAction.GET_MOOD_LIST_REQUEST,
    (resolve) =>
      (
        materials: TGetMoodListMaterials,
        successCallback?: (response: TGetMoodListResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetMoodListRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetMoodListAction.GET_MOOD_LIST_SUCCESS,
    (resolve) =>
      (response: TGetMoodListResponse): TGetMoodListSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetMoodListAction.GET_MOOD_LIST_FAILED,
    (resolve) =>
      (error: unknown): TGetMoodListFailed =>
        resolve({ error }),
  ),
};
