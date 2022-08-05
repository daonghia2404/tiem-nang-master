export type TModalConfirmProps = {
  visible: boolean;
  title: string;
  text?: React.ReactNode | string;
  width?: number;
  loading?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
};
