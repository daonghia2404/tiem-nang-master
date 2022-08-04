import { TAuthState } from '@/redux/reducers/auth';
import { TAuthRegisterSuccess } from '@/redux/actions/auth';

export const authRegisterUpdateState = (state: TAuthState, action: TAuthRegisterSuccess): TAuthState => ({
  ...state,
  authRegisterResponse: action.payload.response,
});
