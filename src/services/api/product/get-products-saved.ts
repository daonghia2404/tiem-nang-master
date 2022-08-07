import { TProduct } from '@/common/models';
import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProductsSavedParams = {
  page: number;
  pageSize: number;
};

export type TGetProductsSavedMaterials = {
  params?: TGetProductsSavedParams;
};

export type TGetProductsSavedResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: {
      createdAt: string;
      product: TProduct;
      updatedAt: string;
      user: string;
      _id: string;
      __v: number;
    }[];
  };
};

// FUNCTION

export const getProductsSaved = async ({ params }: TGetProductsSavedMaterials): Promise<TGetProductsSavedResponse> => {
  const response = await ApiService.get(`/product/saved`, { params });
  return response.data;
};
