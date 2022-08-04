import ApiService from '@/services/api';

// TYPES

export type TAuthForgotResetParams = unknown;
export type TAuthForgotResetBody = {
  password: string;
  newPassword: string;
};
export type TAuthForgotResetHeaders = {
  token: string;
};

export type TAuthForgotResetMaterials = {
  headers?: TAuthForgotResetHeaders;
  params?: TAuthForgotResetParams;
  body?: TAuthForgotResetBody;
};

export type TAuthForgotResetResponse = unknown;

// FUNCTION

export const authForgotReset = async ({
  params,
  body,
  headers,
}: TAuthForgotResetMaterials): Promise<TAuthForgotResetResponse> => {
  const response = await ApiService.post(`/auth/forgot-reset`, body, { params, headers });
  return response.data;
};
