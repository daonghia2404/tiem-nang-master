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

export type TGetApophthganResponse = unknown;

// FUNCTION

export const getApophthgan = async ({ params }: TGetApophthganMaterials): Promise<TGetApophthganResponse> => {
  const response = await ApiService.get(`/apophthgan`, { params });
  return response.data;
};
