import { all, takeLatest } from 'redux-saga/effects';

import { getMoodListAction, getReasonListAction } from '@/redux/actions';

import { getMoodListSaga } from './get-mood-list';
import { getReasonListSaga } from './get-reason-list';

export default function* root(): Generator {
  yield all([
    takeLatest(getMoodListAction.request.type, getMoodListSaga),
    takeLatest(getReasonListAction.request.type, getReasonListSaga),
  ]);
}
