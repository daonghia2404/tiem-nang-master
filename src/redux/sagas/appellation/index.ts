import { all, takeLatest } from 'redux-saga/effects';

import { getAppellationAction, getMyAppellationAction } from '@/redux/actions';

import { getAppellationSaga } from './get-appellation';
import { getMyAppellationSaga } from './get-my-appellation';

export default function* root(): Generator {
  yield all([
    takeLatest(getAppellationAction.request.type, getAppellationSaga),
    takeLatest(getMyAppellationAction.request.type, getMyAppellationSaga),
  ]);
}
