import { TDataStateModalAuth } from '@/containers/ModalAuth/ModalAuth.types';

export type TChangePasswordFormProps = {
  onAuthForgotResetSuccess?: () => void;
  data?: TDataStateModalAuth;
};
