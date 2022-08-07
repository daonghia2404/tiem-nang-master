import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetAppellationParams = {
  page: number;
  pageSize: number;
  keyword: string;
};

export type TGetAppellationMaterials = {
  params?: TGetAppellationParams;
};

export type TGetAppellationResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TAppellation[];
  };
};

export type TAppellation = {
  author: string;
  bcoinOfLevel: number;
  bookRequired: number;
  createdAt: string;
  description: string;
  editor: string;
  giftPerBook: number;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

// FUNCTION

export const getAppellation = async ({ params }: TGetAppellationMaterials): Promise<TGetAppellationResponse> => {
  const response = await ApiService.get(`/appellation`, { params });
  return response.data;
};
