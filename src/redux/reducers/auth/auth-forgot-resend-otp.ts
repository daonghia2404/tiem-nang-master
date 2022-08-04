import { TAuthState } from '@/redux/reducers/auth';
import { TAuthForgotResendOtpSuccess } from '@/redux/actions/auth';

export const authForgotResendOtpUpdateState = (state: TAuthState, action: TAuthForgotResendOtpSuccess): TAuthState => ({
  ...state,
  authForgotResendOtpResponse: action.payload.response,
});
