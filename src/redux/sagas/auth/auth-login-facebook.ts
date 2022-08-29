import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { authLoginFacebookAction } from '@/redux/actions';
import { authLoginFacebook, TAuthLoginFacebookResponse } from '@/services/api';
import Helpers from '@/services/helpers';
import { EResponseCode } from '@/common/enums';

// FUNCTION

export function* authLoginFacebookSaga(action: ActionType<typeof authLoginFacebookAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authLoginFacebook, materials);
    const authLoginFacebookResponse: TAuthLoginFacebookResponse = response as TAuthLoginFacebookResponse;

    if (authLoginFacebookResponse.statusCode === EResponseCode.OK) {
      Helpers.storeAccessToken(authLoginFacebookResponse.data.token || '');
      Helpers.storeRefreshToken('');
    }

    yield put(authLoginFacebookAction.success(authLoginFacebookResponse));
    successCallback?.(authLoginFacebookResponse);
  } catch (err) {
    yield put(authLoginFacebookAction.failure(err));
    failedCallback?.(err);
  }
}
