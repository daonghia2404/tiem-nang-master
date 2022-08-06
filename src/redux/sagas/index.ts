import { all, fork } from 'redux-saga/effects';

import advisorySaga from './advisory';
import apophthganSaga from './apophthgan';
import authSaga from './auth';
import categorySaga from './category';
import membershipSaga from './membership';
import moodSaga from './mood';
import notificationSaga from './notification';
import productSaga from './product';
import profileSaga from './profile';
import uploadSaga from './upload';

const rootSaga = function* root(): Generator {
  yield all([
    fork(advisorySaga),
    fork(apophthganSaga),
    fork(authSaga),
    fork(categorySaga),
    fork(membershipSaga),
    fork(moodSaga),
    fork(notificationSaga),
    fork(productSaga),
    fork(profileSaga),
    fork(uploadSaga),
  ]);
};

export default rootSaga;
