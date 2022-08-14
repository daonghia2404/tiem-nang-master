import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetApophthganParams = {
  page: number;
  pageSize: number;
  mood?: string;
  reason?: string;
};

export type TGetApophthganMaterials = {
  params?: TGetApophthganParams;
};

export type TGetApophthganResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TApophthgan[];
  };
};

export type TApophthgan = {
  author: string;
  createdAt: string;
  mood: string;
  pathImage: string;
  reason: string;
  updatedAt: string;
  _id: string;
  __v: number;
};

// FUNCTION

export const getApophthgan = async ({ params }: TGetApophthganMaterials): Promise<TGetApophthganResponse> => {
  const response = await ApiService.get(`/apophthgan`, { params });
  return response.data;
};
