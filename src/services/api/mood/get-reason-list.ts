import { TCommonResponse, TCommonPaginate } from '@/common/types';
import ApiService, { EGetMoodListType, TMoodList } from '@/services/api';

// TYPES

export type TGetReasonListParams = {
  page: number;
  pageSize: number;
};

export type TGetReasonListMaterials = {
  params?: TGetReasonListParams;
};

export type TGetReasonListResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TMoodList[];
  };
};

// FUNCTION

export const getReasonList = async ({ params }: TGetReasonListMaterials): Promise<TGetReasonListResponse> => {
  const response = await ApiService.get(`/mood/list`, { params: { ...params, type: EGetMoodListType.REASON } });
  return response.data;
};
