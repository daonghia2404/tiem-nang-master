import { all, fork } from 'redux-saga/effects';

import advisorySaga from './advisory';
import authSaga from './auth';
import membershipSaga from './membership';
import profileSaga from './profile';
import uploadSaga from './upload';

const rootSaga = function* root(): Generator {
  yield all([fork(advisorySaga), fork(authSaga), fork(membershipSaga), fork(profileSaga), fork(uploadSaga)]);
};

export default rootSaga;
