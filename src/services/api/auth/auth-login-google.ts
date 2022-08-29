import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthLoginGoogleParams = unknown;
export type TAuthLoginGoogleBody = {
  token: string;
};

export type TAuthLoginGoogleMaterials = {
  params?: TAuthLoginGoogleParams;
  body?: TAuthLoginGoogleBody;
};

export type TAuthLoginGoogleResponse = TCommonResponse & {
  data: { token: string };
};

// FUNCTION

export const authLoginGoogle = async ({
  params,
  body,
}: TAuthLoginGoogleMaterials): Promise<TAuthLoginGoogleResponse> => {
  const response = await ApiService.post(`/auth/login/google`, body, { params });
  return response.data;
};
