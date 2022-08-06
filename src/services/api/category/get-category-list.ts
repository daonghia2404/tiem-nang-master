import { TCategory } from '@/common/models';
import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetCategoryListParams = {
  page: number;
  pageSize: number;
};

export type TGetCategoryListMaterials = {
  params?: TGetCategoryListParams;
};

export type TGetCategoryListResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TCategory[][];
  };
};

// FUNCTION

export const getCategoryList = async ({ params }: TGetCategoryListMaterials): Promise<TGetCategoryListResponse> => {
  const response = await ApiService.get(`/category/list`, { params });
  return response.data;
};
