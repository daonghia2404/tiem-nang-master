import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authLoginGoogleAction } from '@/redux/actions';
import { authLoginGoogle, TAuthLoginGoogleResponse } from '@/services/api';
import Helpers from '@/services/helpers';
import { EResponseCode } from '@/common/enums';

// FUNCTION

export function* authLoginGoogleSaga(action: ActionType<typeof authLoginGoogleAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authLoginGoogle, materials);
    const authLoginGoogleResponse: TAuthLoginGoogleResponse = response as TAuthLoginGoogleResponse;

    if (authLoginGoogleResponse.statusCode === EResponseCode.OK) {
      Helpers.storeAccessToken(authLoginGoogleResponse.data.token || '');
      Helpers.storeRefreshToken('');
    }

    yield put(authLoginGoogleAction.success(authLoginGoogleResponse));
    successCallback?.(authLoginGoogleResponse);
  } catch (err) {
    yield put(authLoginGoogleAction.failure(err));
    failedCallback?.(err);
  }
}
