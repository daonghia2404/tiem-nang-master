import ApiService from '@/services/api';

// TYPES

export type TAskProductQuestionPaths = {
  id: string | number;
};
export type TAskProductQuestionParams = unknown;
export type TAskProductQuestionBody = unknown;

export type TAskProductQuestionMaterials = {
  paths?: TAskProductQuestionPaths;
  params?: TAskProductQuestionParams;
  body?: TAskProductQuestionBody;
};

export type TAskProductQuestionResponse = unknown;

// FUNCTION

export const askProductQuestion = async ({
  paths,
  params,
  body,
}: TAskProductQuestionMaterials): Promise<TAskProductQuestionResponse> => {
  const response = await ApiService.post(`/product/${paths?.id}/ask`, body, { params });
  return response.data;
};
