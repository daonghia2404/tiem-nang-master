import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProductRatePaths = {
  id: string | number;
};
export type TGetProductRateParams = {
  page: number;
  pageSize: number;
};

export type TGetProductRateMaterials = {
  paths?: TGetProductRatePaths;
  params?: TGetProductRateParams;
};

export type TGetProductRateResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TProductRate[];
  };
};

export type TProductRate = {
  accepted: boolean;
  content: string;
  contentStar: number;
  createdAt: string;
  product: string;
  updatedAt: string;
  user: { _id: string; name: string; avatar: string };
  voiceStar: number;
  __v: number;
  _id: string;
};

// FUNCTION

export const getProductRate = async ({ paths, params }: TGetProductRateMaterials): Promise<TGetProductRateResponse> => {
  const response = await ApiService.get(`/rate/product/${paths?.id}`, { params });
  return response.data;
};
