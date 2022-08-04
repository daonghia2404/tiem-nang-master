export type TModalConfirmProps = {
  visible: boolean;
  title: string;
  text?: React.ReactNode | string;
  width?: number;
  onClose?: () => void;
  onSubmit?: () => void;
};
