import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import profileSaga from './profile';
import uploadSaga from './upload';

const rootSaga = function* root(): Generator {
  yield all([fork(authSaga), fork(profileSaga), fork(uploadSaga)]);
};

export default rootSaga;
