import { EKeyStateModalAuth } from '@/containers/ModalAuth/ModalAuth.enums';
import { TDataStateModalAuth } from '@/containers/ModalAuth/ModalAuth.types';

export type TVerifyOtpFormProps = {
  onVerifyRegisterSuccess?: (data: { token: string }) => void;
  onVerifyForgotSuccess?: (data: { token: string }) => void;
  keyVisible: EKeyStateModalAuth;
  data?: TDataStateModalAuth;
};
