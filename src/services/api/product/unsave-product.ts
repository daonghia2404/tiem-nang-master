import ApiService from '@/services/api';

// TYPES

export type TUnsaveProductPaths = {
  id: string | number;
};
export type TUnsaveProductParams = unknown;
export type TUnsaveProductBody = unknown;

export type TUnsaveProductMaterials = {
  paths?: TUnsaveProductPaths;
  params?: TUnsaveProductParams;
  body?: TUnsaveProductBody;
};

export type TUnsaveProductResponse = unknown;

// FUNCTION

export const unsaveProduct = async ({
  paths,
  params,
  body,
}: TUnsaveProductMaterials): Promise<TUnsaveProductResponse> => {
  const response = await ApiService.post(`/product/${paths?.id}/unsave`, body, { params });
  return response.data;
};
