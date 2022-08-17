import { ETransactionType } from '@/services/api';

export type TModalConfirmBuyBookProps = {
  visible: boolean;
  payment_type?: ETransactionType;
  onClose?: () => void;
  onSubmit?: () => void;
};
