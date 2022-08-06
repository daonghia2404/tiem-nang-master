import { TApophthganState } from '@/redux/reducers/apophthgan';
import { TGetApophthganSuccess } from '@/redux/actions/apophthgan';

export const getApophthganUpdateState = (state: TApophthganState, action: TGetApophthganSuccess): TApophthganState => ({
  ...state,
  getApophthganResponse: action.payload.response,
});
