import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthLoginParams = unknown;
export type TAuthLoginBody = {
  email: string;
  password: string;
  token_firebase?: string;
};

export type TAuthLoginMaterials = {
  params?: TAuthLoginParams;
  body?: TAuthLoginBody;
};

export type TAuthLoginResponse = TCommonResponse & {
  data: {
    token?: string;
  };
};

// FUNCTION

export const authLogin = async ({ params, body }: TAuthLoginMaterials): Promise<TAuthLoginResponse> => {
  const response = await ApiService.post(`/auth/login`, body, { params });
  return response.data;
};
