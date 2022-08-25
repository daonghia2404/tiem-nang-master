import { TAuthState } from '@/redux/reducers/auth';
import { TAuthLoginGoogleSuccess } from '@/redux/actions/auth';

export const authLoginGoogleUpdateState = (state: TAuthState, action: TAuthLoginGoogleSuccess): TAuthState => ({
  ...state,
  authLoginGoogleResponse: action.payload.response,
});
