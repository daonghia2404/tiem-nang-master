import { all, takeLatest } from 'redux-saga/effects';

import { getApophthganAction } from '@/redux/actions';

import { getApophthganSaga } from './get-apophthgan';

export default function* root(): Generator {
  yield all([takeLatest(getApophthganAction.request.type, getApophthganSaga)]);
}
