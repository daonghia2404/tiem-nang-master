import { TAuthState } from '@/redux/reducers/auth';
import { TAuthForgotVerifySuccess } from '@/redux/actions/auth';

export const authForgotVerifyUpdateState = (state: TAuthState, action: TAuthForgotVerifySuccess): TAuthState => ({
  ...state,
  authForgotVerifyResponse: action.payload.response,
});
