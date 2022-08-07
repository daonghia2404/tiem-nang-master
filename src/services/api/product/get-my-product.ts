import { TProduct } from '@/common/models';
import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMyProductParams = {
  page: number;
  pageSize: number;
};

export type TGetMyProductMaterials = {
  params?: TGetMyProductParams;
};

export type TGetMyProductResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: {
      product: TProduct;
      user: string;
      _id: string;
      __v: number;
    }[];
  };
};

// FUNCTION

export const getMyProduct = async ({ params }: TGetMyProductMaterials): Promise<TGetMyProductResponse> => {
  const response = await ApiService.get(`/my-book`, { params });
  return response.data;
};
