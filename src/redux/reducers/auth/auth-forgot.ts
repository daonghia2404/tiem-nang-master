import { TAuthState } from '@/redux/reducers/auth';
import { TAuthForgotSuccess } from '@/redux/actions/auth';

export const authForgotUpdateState = (state: TAuthState, action: TAuthForgotSuccess): TAuthState => ({
  ...state,
  authForgotResponse: action.payload.response,
});
