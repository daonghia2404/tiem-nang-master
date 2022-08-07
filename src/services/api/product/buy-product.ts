import ApiService from '@/services/api';

// TYPES

export type TBuyProductPaths = {
  id: string | number;
};
export type TBuyProductParams = unknown;
export type TBuyProductBody = unknown;

export type TBuyProductMaterials = {
  paths?: TBuyProductPaths;
  params?: TBuyProductParams;
  body?: TBuyProductBody;
};

export type TBuyProductResponse = unknown;

// FUNCTION

export const buyProduct = async ({ paths, params, body }: TBuyProductMaterials): Promise<TBuyProductResponse> => {
  const response = await ApiService.post(`/product/${paths?.id}/buy-book`, body, { params });
  return response.data;
};
