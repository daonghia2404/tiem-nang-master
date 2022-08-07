import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMyAppellationParams = unknown;

export type TGetMyAppellationMaterials = {
  params?: TGetMyAppellationParams;
};

export type TGetMyAppellationResponse = TCommonResponse & {
  data: {
    bcoinOfLevel: number;
    giftPerBook: number;
    myBook: number;
    myBookRequireForUpAppellation: number;
    name: string;
    username: string;
  };
};

// FUNCTION

export const getMyAppellation = async ({ params }: TGetMyAppellationMaterials): Promise<TGetMyAppellationResponse> => {
  const response = await ApiService.get(`/auth/my-appellation`, { params });
  return response.data;
};
