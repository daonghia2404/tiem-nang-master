import { all, takeLatest } from 'redux-saga/effects';

import { getMembershipListAction, getMyMembershipAction, updradeMyMembershipAction } from '@/redux/actions';

import { getMembershipListSaga } from './get-membership-list';
import { getMyMembershipSaga } from './get-my-membership';
import { updradeMyMembershipSaga } from './updrade-my-membership';

export default function* root(): Generator {
  yield all([
    takeLatest(getMembershipListAction.request.type, getMembershipListSaga),
    takeLatest(getMyMembershipAction.request.type, getMyMembershipSaga),
    takeLatest(updradeMyMembershipAction.request.type, updradeMyMembershipSaga),
  ]);
}
