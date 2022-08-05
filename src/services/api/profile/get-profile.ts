import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetProfileParams = unknown;

export type TGetProfileMaterials = {
  params?: TGetProfileParams;
};

export type TGetProfileResponse = TCommonResponse & {
  data: {
    avatar: string;
    bcoin: number;
    dob: null;
    email: string;
    gender: null;
    name: string;
    phone: string;
    referralId: string;
    membership: TMemberShip;
  };
};

export type TMemberShip = {
  bcoin: number;
  description: string;
  name: string;
  _id: string;
};

// FUNCTION

export const getProfile = async ({ params }: TGetProfileMaterials): Promise<TGetProfileResponse> => {
  const response = await ApiService.get(`/profile`, { params });
  return response.data;
};
