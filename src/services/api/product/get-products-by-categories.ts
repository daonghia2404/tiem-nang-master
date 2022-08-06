import { TProduct } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProductsByCategoriesParams = unknown;
export type TGetProductsByCategoriesBody = string[];
export type TGetProductsByCategoriesPaths = {
  filter?: string;
};

export type TGetProductsByCategoriesMaterials = {
  paths?: TGetProductsByCategoriesPaths;
  params?: TGetProductsByCategoriesParams;
  body?: TGetProductsByCategoriesBody;
};

export type TGetProductsByCategoriesResponse = TCommonResponse & {
  data?: TProduct[];
};

// FUNCTION

export const getProductsByCategories = async ({
  paths,
  params,
  body,
}: TGetProductsByCategoriesMaterials): Promise<TGetProductsByCategoriesResponse> => {
  const response = await ApiService.post(`/product/category${paths?.filter ? `/${paths.filter}` : ''}`, body, {
    params,
  });
  return response.data;
};
