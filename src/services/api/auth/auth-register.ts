import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthRegisterParams = unknown;
export type TAuthRegisterBody = {
  email: string;
  name: string;
  password: string;
  referrer?: string;
};

export type TAuthRegisterMaterials = {
  params?: TAuthRegisterParams;
  body?: TAuthRegisterBody;
};

export type TAuthRegisterResponse = TCommonResponse & {
  data: {
    token: string;
  };
};

// FUNCTION

export const authRegister = async ({ params, body }: TAuthRegisterMaterials): Promise<TAuthRegisterResponse> => {
  const response = await ApiService.post(`/auth/register`, body, { params });
  return response.data;
};
