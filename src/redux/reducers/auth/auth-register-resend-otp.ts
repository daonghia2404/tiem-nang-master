import { TAuthState } from '@/redux/reducers/auth';
import { TAuthRegisterResendOtpSuccess } from '@/redux/actions/auth';

export const authRegisterResendOtpUpdateState = (
  state: TAuthState,
  action: TAuthRegisterResendOtpSuccess,
): TAuthState => ({
  ...state,
  authRegisterResendOtpResponse: action.payload.response,
});
