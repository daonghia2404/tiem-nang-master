import { TPayment } from '@/services/api';

export type THistoryPaymentProps = {
  data: TPayment[];
  page: number;
  pageSize: number;
  total?: number;
  onPaginateChange?: (page: number, pageSize?: number) => void;
};
