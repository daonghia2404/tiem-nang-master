import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetMembershipListParams = unknown;

export type TGetMembershipListMaterials = {
  params?: TGetMembershipListParams;
};

export type TGetMembershipListResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TMembershipList[];
  };
};

export type TMembershipList = {
  author: string;
  createdAt: string;
  description: string;
  editor: string;
  name: string;
  updatedAt: string;
  _id: string;
  activated: boolean;
  bcoin: number;
  book_for_free: number;
  level: number;
  __v: number;
};

// FUNCTION

export const getMembershipList = async ({
  params,
}: TGetMembershipListMaterials): Promise<TGetMembershipListResponse> => {
  const response = await ApiService.get(`/membership`, { params });
  return response.data;
};
