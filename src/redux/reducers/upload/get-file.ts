import { TUploadState } from '@/redux/reducers/upload';
import { TGetFileSuccess } from '@/redux/actions/upload';

export const getFileUpdateState = (state: TUploadState, action: TGetFileSuccess): TUploadState => ({
  ...state,
  getFileResponse: action.payload.response,
});
