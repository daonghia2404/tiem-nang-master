import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthForgotParams = unknown;
export type TAuthForgotBody = {
  email: string;
};

export type TAuthForgotMaterials = {
  params?: TAuthForgotParams;
  body?: TAuthForgotBody;
};

export type TAuthForgotResponse = TCommonResponse & {
  data: {
    token: string;
  };
};

// FUNCTION

export const authForgot = async ({ params, body }: TAuthForgotMaterials): Promise<TAuthForgotResponse> => {
  const response = await ApiService.post(`/auth/forgot`, body, { params });
  return response.data;
};
