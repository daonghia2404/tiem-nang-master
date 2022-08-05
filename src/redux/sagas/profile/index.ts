import { all, takeLatest } from 'redux-saga/effects';

import { changePasswordProfileAction, getProfileAction, updateProfileAction } from '@/redux/actions';

import { changePasswordProfileSaga } from './change-password-profile';
import { getProfileSaga } from './get-profile';
import { updateProfileSaga } from './update-profile';

export default function* root(): Generator {
  yield all([
    takeLatest(changePasswordProfileAction.request.type, changePasswordProfileSaga),
    takeLatest(getProfileAction.request.type, getProfileSaga),
    takeLatest(updateProfileAction.request.type, updateProfileSaga),
  ]);
}
