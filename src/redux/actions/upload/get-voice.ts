import { createActionCreator } from 'deox';

import { TGetVoiceMaterials, TGetVoiceResponse } from '@/services/api/upload/get-voice';

// CONSTANTS

export enum EGetVoiceAction {
  GET_VOICE = 'GET_VOICE',
  GET_VOICE_REQUEST = 'GET_VOICE_REQUEST',
  GET_VOICE_SUCCESS = 'GET_VOICE_SUCCESS',
  GET_VOICE_FAILED = 'GET_VOICE_FAILED',
}

// TYPES

export type TGetVoiceRequest = {
  type: EGetVoiceAction.GET_VOICE_REQUEST;
  payload: {
    materials: TGetVoiceMaterials;
    successCallback?: (response: TGetVoiceResponse) => void;
    failedCallback?: (err: unknown) => void;
  };
};

export type TGetVoiceSuccess = {
  type: EGetVoiceAction.GET_VOICE_SUCCESS;
  payload: { response: TGetVoiceResponse };
};

export type TGetVoiceFailed = { type: EGetVoiceAction.GET_VOICE_FAILED };

// FUNCTION

export const getVoiceAction = {
  request: createActionCreator(
    EGetVoiceAction.GET_VOICE_REQUEST,
    (resolve) =>
      (
        materials: TGetVoiceMaterials,
        successCallback?: (response: TGetVoiceResponse) => void,
        failedCallback?: (err: unknown) => void,
      ): TGetVoiceRequest =>
        resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(
    EGetVoiceAction.GET_VOICE_SUCCESS,
    (resolve) =>
      (response: TGetVoiceResponse): TGetVoiceSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EGetVoiceAction.GET_VOICE_FAILED,
    (resolve) =>
      (error: unknown): TGetVoiceFailed =>
        resolve({ error }),
  ),
};
