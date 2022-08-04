import { TAuthState } from '@/redux/reducers/auth';
import { TAuthVerifySuccess } from '@/redux/actions/auth';

export const authVerifyUpdateState = (state: TAuthState, action: TAuthVerifySuccess): TAuthState => ({
  ...state,
  authVerifyResponse: action.payload.response,
});
