import ApiService from '@/services/api';

// TYPES

export type TSaveProductPaths = {
  id: string | number;
};
export type TSaveProductParams = unknown;
export type TSaveProductBody = unknown;

export type TSaveProductMaterials = {
  paths?: TSaveProductPaths;
  params?: TSaveProductParams;
  body?: TSaveProductBody;
};

export type TSaveProductResponse = unknown;

// FUNCTION

export const saveProduct = async ({ paths, params, body }: TSaveProductMaterials): Promise<TSaveProductResponse> => {
  const response = await ApiService.post(`/product/${paths?.id}/save`, body, { params });
  return response.data;
};
