import { TPayment } from '@/services/api';

export type THistoryCoinProps = {
  data: TPayment[];
  page: number;
  pageSize: number;
  total?: number;
  onPaginateChange?: (page: number, pageSize?: number) => void;
};
