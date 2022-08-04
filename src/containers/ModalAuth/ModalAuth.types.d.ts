import { EKeyStateModalAuth } from '@/containers/ModalAuth/ModalAuth.enums';

export type TModalAuthProps = {
  visible: boolean;
  defaultKey?: EKeyStateModalAuth;
  onClose?: () => void;
};

export type TDataStateModalAuth = {
  token?: string;
};
