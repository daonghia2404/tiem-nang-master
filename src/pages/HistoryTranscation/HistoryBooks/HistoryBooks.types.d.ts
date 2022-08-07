import { TProduct } from '@/common/models';

export type THistoryBooksProps = {
  data: TProduct[];
  page: number;
  pageSize: number;
  total?: number;
  onPaginateChange?: (page: number, pageSize?: number) => void;
};
