export type TSignInFormProps = {
  onClickRegister?: () => void;
  onClickForgotPassword?: () => void;
  onLoginSuccess?: () => void;
  onActiveAccount?: (data: { token?: string }) => void;
};
