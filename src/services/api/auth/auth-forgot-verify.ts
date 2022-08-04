import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthForgotVerifyParams = unknown;
export type TAuthForgotVerifyBody = {
  otp: string;
};
export type TAuthForgotVerifyHeaders = {
  token: string;
};

export type TAuthForgotVerifyMaterials = {
  headers?: TAuthForgotVerifyHeaders;
  params?: TAuthForgotVerifyParams;
  body?: TAuthForgotVerifyBody;
};

export type TAuthForgotVerifyResponse = TCommonResponse & {
  data: {
    token: string;
  };
};

// FUNCTION

export const authForgotVerify = async ({
  params,
  body,
  headers,
}: TAuthForgotVerifyMaterials): Promise<TAuthForgotVerifyResponse> => {
  const response = await ApiService.post(`/auth/forgot-verify`, body, { params, headers });
  return response.data;
};
