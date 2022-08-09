import { all, takeLatest } from 'redux-saga/effects';

import { getFileAction, getVoiceAction, uploadAction } from '@/redux/actions';

import { getFileSaga } from './get-file';
import { getVoiceSaga } from './get-voice';
import { uploadSaga } from './upload';

export default function* root(): Generator {
  yield all([
    takeLatest(getFileAction.request.type, getFileSaga),
    takeLatest(getVoiceAction.request.type, getVoiceSaga),
    takeLatest(uploadAction.request.type, uploadSaga),
  ]);
}
