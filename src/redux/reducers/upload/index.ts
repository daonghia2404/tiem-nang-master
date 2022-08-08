import { createReducer } from 'deox';

import { TGetVoiceResponse, TUploadResponse } from '@/services/api/upload';
import { getVoiceAction, uploadAction } from '@/redux/actions';
import { getVoiceUpdateState } from './get-voice';
import { uploadUpdateState } from './upload';

export type TUploadState = {
  getVoiceResponse?: TGetVoiceResponse;
  uploadResponse?: TUploadResponse;
};

const initialState: TUploadState = {
  getVoiceResponse: undefined,
  uploadResponse: undefined,
};

const UploadReducer = createReducer(initialState, (handleAction) => [
  handleAction(getVoiceAction.success, getVoiceUpdateState),
  handleAction(uploadAction.success, uploadUpdateState),
]);

export default UploadReducer;
