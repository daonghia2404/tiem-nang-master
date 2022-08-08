import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getVoiceAction } from '@/redux/actions';
import { getVoice, TGetVoiceResponse } from '@/services/api';

// FUNCTION

export function* getVoiceSaga(action: ActionType<typeof getVoiceAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getVoice, materials);
    const getVoiceResponse: TGetVoiceResponse = response as TGetVoiceResponse;
    yield put(getVoiceAction.success(getVoiceResponse));
    successCallback?.(getVoiceResponse);
  } catch (err) {
    yield put(getVoiceAction.failure(err));
    failedCallback?.(err);
  }
}
