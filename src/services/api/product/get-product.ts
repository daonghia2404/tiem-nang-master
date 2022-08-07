import { TProduct } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProductPaths = {
  id: string | number;
};
export type TGetProductParams = unknown;

export type TGetProductMaterials = {
  paths?: TGetProductPaths;
  params?: TGetProductParams;
};

export type TGetProductResponse = TCommonResponse & {
  data: {
    book: TProduct;
    is_buy: boolean;
    is_save: boolean;
  };
};

// FUNCTION

export const getProduct = async ({ paths, params }: TGetProductMaterials): Promise<TGetProductResponse> => {
  const response = await ApiService.get(`/product/${paths?.id}`, { params });
  return response.data;
};
