import ApiService from '@/services/api';

// TYPES

export type TUpdradeMyMembershipParams = unknown;
export type TUpdradeMyMembershipBody = unknown;

export type TUpdradeMyMembershipMaterials = {
  params?: TUpdradeMyMembershipParams;
  body?: TUpdradeMyMembershipBody;
};

export type TUpdradeMyMembershipResponse = unknown;

// FUNCTION

export const updradeMyMembership = async ({
  params,
  body,
}: TUpdradeMyMembershipMaterials): Promise<TUpdradeMyMembershipResponse> => {
  const response = await ApiService.post(`/auth/upgrade-membership`, body, { params });
  return response.data;
};
