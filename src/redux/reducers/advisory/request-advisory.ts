import { TAdvisoryState } from '@/redux/reducers/advisory';
import { TRequestAdvisorySuccess } from '@/redux/actions/advisory';

export const requestAdvisoryUpdateState = (state: TAdvisoryState, action: TRequestAdvisorySuccess): TAdvisoryState => ({
  ...state,
  requestAdvisoryResponse: action.payload.response,
});
