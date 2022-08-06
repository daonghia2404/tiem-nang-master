import { TProduct } from '@/common/models';
import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProductsSearchParams = {
  page: number;
  pageSize: number;
  keyword: string;
};

export type TGetProductsSearchMaterials = {
  params?: TGetProductsSearchParams;
};

export type TGetProductsSearchResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TProduct[];
  };
};

// FUNCTION

export const getProductsSearch = async ({
  params,
}: TGetProductsSearchMaterials): Promise<TGetProductsSearchResponse> => {
  const response = await ApiService.get(`/product/search`, { params });
  return response.data;
};
