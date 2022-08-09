import { createReducer } from 'deox';

import { TGetFileResponse, TGetVoiceResponse, TUploadResponse } from '@/services/api/upload';
import { getFileAction, getVoiceAction, uploadAction } from '@/redux/actions';
import { getFileUpdateState } from './get-file';
import { getVoiceUpdateState } from './get-voice';
import { uploadUpdateState } from './upload';

export type TUploadState = {
  getFileResponse?: TGetFileResponse;
  getVoiceResponse?: TGetVoiceResponse;
  uploadResponse?: TUploadResponse;
};

const initialState: TUploadState = {
  getFileResponse: undefined,
  getVoiceResponse: undefined,
  uploadResponse: undefined,
};

const UploadReducer = createReducer(initialState, (handleAction) => [
  handleAction(getFileAction.success, getFileUpdateState),
  handleAction(getVoiceAction.success, getVoiceUpdateState),
  handleAction(uploadAction.success, uploadUpdateState),
]);

export default UploadReducer;
