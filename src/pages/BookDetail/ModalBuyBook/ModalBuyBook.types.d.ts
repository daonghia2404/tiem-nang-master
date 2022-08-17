import { ETransactionType } from '@/services/api';

export type TModalBuyBookProps = {
  visible: boolean;
  onClose?: () => void;
  onSubmit?: (values: { payment_type: ETransactionType }) => void;
};
