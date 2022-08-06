import { createReducer } from 'deox';

import { TGetApophthganResponse } from '@/services/api/apophthgan';
import { getApophthganAction } from '@/redux/actions';
import { getApophthganUpdateState } from './get-apophthgan';

export type TApophthganState = {
  getApophthganResponse?: TGetApophthganResponse;
};

const initialState: TApophthganState = {
  getApophthganResponse: undefined,
};

const ApophthganReducer = createReducer(initialState, (handleAction) => [
  handleAction(getApophthganAction.success, getApophthganUpdateState),
]);

export default ApophthganReducer;
