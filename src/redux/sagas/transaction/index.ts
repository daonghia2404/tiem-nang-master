import { all, takeLatest } from 'redux-saga/effects';

import { getTransactionAction } from '@/redux/actions';

import { getTransactionSaga } from './get-transaction';

export default function* root(): Generator {
  yield all([takeLatest(getTransactionAction.request.type, getTransactionSaga)]);
}
