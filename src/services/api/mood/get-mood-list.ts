import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// ENUMS
export enum EGetMoodListType {
  MOOD = 'MOOD',
  REASON = 'REASON',
}

// TYPES

export type TGetMoodListParams = {
  page: number;
  pageSize: number;
};

export type TGetMoodListMaterials = {
  params?: TGetMoodListParams;
};

export type TGetMoodListResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TMoodList[];
  };
};

export type TMoodList = {
  author: string;
  createdAt: string;
  iconPath: string;
  isActivated: boolean;
  isDeleted: boolean;
  name: string;
  type: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

// FUNCTION

export const getMoodList = async ({ params }: TGetMoodListMaterials): Promise<TGetMoodListResponse> => {
  const response = await ApiService.get(`/mood/list`, { params: { ...params, type: EGetMoodListType.MOOD } });
  return response.data;
};
