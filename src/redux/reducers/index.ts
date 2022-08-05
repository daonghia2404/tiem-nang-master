import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import advisoryReducer from './advisory';
import authReducer from './auth';
import membershipReducer from './membership';
import profileReducer from './profile';
import uiReducer from './ui';
import uploadReducer from './upload';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  advisoryReducer,
  authReducer,
  membershipReducer,
  profileReducer,
  uiReducer,
  uploadReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
