import { TButtonProps } from '@/components/Button';

export type TModalProps = {
  className?: string;
  wrapClassName?: string;
  visible: boolean;
  width?: string | number;
  centered?: boolean;
  cancelButton?: TButtonProps;
  confirmButton?: TButtonProps;
  closeable?: boolean;
  hideFooter?: boolean;
  title?: string;
  onClose?: () => void;
  onSubmit?: () => void;
};
