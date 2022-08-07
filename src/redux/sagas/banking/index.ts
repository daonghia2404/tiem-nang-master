import { all, takeLatest } from 'redux-saga/effects';

import { getBanksListAction } from '@/redux/actions';

import { getBanksListSaga } from './get-banks-list';

export default function* root(): Generator {
  yield all([takeLatest(getBanksListAction.request.type, getBanksListSaga)]);
}
