import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetFilterProductListParams = unknown;

export type TGetFilterProductListMaterials = {
  params?: TGetFilterProductListParams;
};

export type TGetFilterProductListResponse = TCommonResponse & {
  data: TFilterProductList[];
};

export type TFilterProductList = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// FUNCTION

export const getFilterProductList = async ({
  params,
}: TGetFilterProductListMaterials): Promise<TGetFilterProductListResponse> => {
  const response = await ApiService.get(`/filter-product`, { params });
  return response.data;
};
