import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthVerifyParams = unknown;
export type TAuthVerifyBody = {
  otp: string;
};
export type TAuthVerifyHeaders = {
  token: string;
};

export type TAuthVerifyMaterials = {
  headers?: TAuthVerifyHeaders;
  params?: TAuthVerifyParams;
  body?: TAuthVerifyBody;
};

export type TAuthVerifyResponse = TCommonResponse & {
  data: {
    token: string;
  };
};

// FUNCTION

export const authVerify = async ({ params, body, headers }: TAuthVerifyMaterials): Promise<TAuthVerifyResponse> => {
  const response = await ApiService.post(`/auth/verify`, body, { params, headers });
  return response.data;
};
