import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProductQuestionsPaths = {
  id: string | number;
};
export type TGetProductQuestionsParams = {
  page: number;
  pageSize: number;
};

export type TGetProductQuestionsMaterials = {
  paths?: TGetProductQuestionsPaths;
  params?: TGetProductQuestionsParams;
};

export type TGetProductQuestionsResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TProductQuestion[];
  };
};

export type TProductQuestion = {
  createdAt: string;
  name: string;
  product: string;
  question: string;
  updatedAt: string;
  user: string;
  _id: string;
  __v: number;
};

// FUNCTION

export const getProductQuestions = async ({
  paths,
  params,
}: TGetProductQuestionsMaterials): Promise<TGetProductQuestionsResponse> => {
  const response = await ApiService.get(`/product/${paths?.id}/asked-questions`, { params });
  return response.data;
};
