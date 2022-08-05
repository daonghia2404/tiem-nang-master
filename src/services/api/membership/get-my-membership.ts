import { TCommonResponse } from '@/common/types';
import ApiService, { TMembershipList } from '@/services/api';

// TYPES

export type TGetMyMembershipParams = unknown;

export type TGetMyMembershipMaterials = {
  params?: TGetMyMembershipParams;
};

export type TGetMyMembershipResponse = TCommonResponse & {
  data: TMembershipList;
};

// FUNCTION

export const getMyMembership = async ({ params }: TGetMyMembershipMaterials): Promise<TGetMyMembershipResponse> => {
  const response = await ApiService.get(`/auth/my-membership`, { params });
  return response.data;
};
