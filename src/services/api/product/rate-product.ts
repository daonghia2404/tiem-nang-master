import ApiService from '@/services/api';

// TYPES

export type TRateProductParams = unknown;
export type TRateProductBody = {
  voiceStar: number;
  contentStar: number;
  content: string;
};
export type TRateProductPaths = { id: string };

export type TRateProductMaterials = {
  paths?: TRateProductPaths;
  params?: TRateProductParams;
  body?: TRateProductBody;
};

export type TRateProductResponse = unknown;

// FUNCTION

export const rateProduct = async ({ params, body, paths }: TRateProductMaterials): Promise<TRateProductResponse> => {
  const response = await ApiService.post(`/rate/product/${paths?.id}`, body, { params });
  return response.data;
};
