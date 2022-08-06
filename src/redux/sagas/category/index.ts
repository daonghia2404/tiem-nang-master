import { all, takeLatest } from 'redux-saga/effects';

import { getCategoryListAction } from '@/redux/actions';

import { getCategoryListSaga } from './get-category-list';

export default function* root(): Generator {
  yield all([takeLatest(getCategoryListAction.request.type, getCategoryListSaga)]);
}
