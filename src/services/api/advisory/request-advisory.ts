import ApiService from '@/services/api';

// TYPES

export type TRequestAdvisoryParams = unknown;
export type TRequestAdvisoryBody = {
  name: string;
  issueType: string;
  appointmentDate: string;
  contact: string;
  content: string;
};

export type TRequestAdvisoryMaterials = {
  params?: TRequestAdvisoryParams;
  body?: TRequestAdvisoryBody;
};

export type TRequestAdvisoryResponse = unknown;

// FUNCTION

export const requestAdvisory = async ({
  params,
  body,
}: TRequestAdvisoryMaterials): Promise<TRequestAdvisoryResponse> => {
  const response = await ApiService.post(`/advisory/request`, body, { params });
  return response.data;
};
