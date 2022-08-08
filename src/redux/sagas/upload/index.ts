import { all, takeLatest } from 'redux-saga/effects';

import { getVoiceAction, uploadAction } from '@/redux/actions';

import { getVoiceSaga } from './get-voice';
import { uploadSaga } from './upload';

export default function* root(): Generator {
  yield all([takeLatest(getVoiceAction.request.type, getVoiceSaga), takeLatest(uploadAction.request.type, uploadSaga)]);
}
