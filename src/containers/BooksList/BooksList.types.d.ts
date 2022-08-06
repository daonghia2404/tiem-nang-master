import { TProduct } from '@/common/models';
import { TFilterProductList } from '@/services/api';

export type TBooksListProps = {
  data?: TProduct[];
  title?: string;
  dataFilter?: TFilterProductList[];
  emptyTitle?: string;
  ids?: (string | undefined)[];
  useCarousel?: boolean;
  page?: number;
  pageSize?: number;
  total?: number;
  onClickFilter?: (data: TFilterProductList) => void;
  onPaginateChange?: (page: number, pageSize?: number) => void;
};
