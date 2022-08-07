import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetBanksListParams = unknown;

export type TGetBanksListMaterials = {
  params?: TGetBanksListParams;
};

export type TGetBanksListResponse = TCommonResponse & {
  data: TBank[];
};

export type TBank = {
  _id: string;
  bank_name: string;
  icon_url: string;
  owner_name: string;
  bank_account: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  activate: boolean;
};

// FUNCTION

export const getBanksList = async ({ params }: TGetBanksListMaterials): Promise<TGetBanksListResponse> => {
  const response = await ApiService.get(`/banking/list`, { params });
  return response.data;
};
