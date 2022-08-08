import { TUploadState } from '@/redux/reducers/upload';
import { TGetVoiceSuccess } from '@/redux/actions/upload';

export const getVoiceUpdateState = (state: TUploadState, action: TGetVoiceSuccess): TUploadState => ({
  ...state,
  getVoiceResponse: action.payload.response,
});
