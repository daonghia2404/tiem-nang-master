import { TAuthState } from '@/redux/reducers/auth';
import { TAuthLoginFacebookSuccess } from '@/redux/actions/auth';

export const authLoginFacebookUpdateState = (state: TAuthState, action: TAuthLoginFacebookSuccess): TAuthState => ({
  ...state,
  authLoginFacebookResponse: action.payload.response,
});
