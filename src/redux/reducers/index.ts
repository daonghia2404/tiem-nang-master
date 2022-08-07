import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import advisoryReducer from './advisory';
import apophthganReducer from './apophthgan';
import authReducer from './auth';
import categoryReducer from './category';
import membershipReducer from './membership';
import moodReducer from './mood';
import notificationReducer from './notification';
import productReducer from './product';
import profileReducer from './profile';
import transactionReducer from './transaction';
import uiReducer from './ui';
import uploadReducer from './upload';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  advisoryReducer,
  apophthganReducer,
  authReducer,
  categoryReducer,
  membershipReducer,
  moodReducer,
  notificationReducer,
  productReducer,
  profileReducer,
  transactionReducer,
  uiReducer,
  uploadReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
