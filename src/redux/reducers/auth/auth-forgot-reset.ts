import { TAuthState } from '@/redux/reducers/auth';
import { TAuthForgotResetSuccess } from '@/redux/actions/auth';

export const authForgotResetUpdateState = (state: TAuthState, action: TAuthForgotResetSuccess): TAuthState => ({
  ...state,
  authForgotResetResponse: action.payload.response,
});
