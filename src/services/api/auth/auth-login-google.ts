import ApiService from '@/services/api';

// TYPES

export type TAuthLoginGoogleParams = unknown;
export type TAuthLoginGoogleBody = {
  token: string;
  token_device: string;
};

export type TAuthLoginGoogleMaterials = {
  params?: TAuthLoginGoogleParams;
  body?: TAuthLoginGoogleBody;
};

export type TAuthLoginGoogleResponse = unknown;

// FUNCTION

export const authLoginGoogle = async ({
  params,
  body,
}: TAuthLoginGoogleMaterials): Promise<TAuthLoginGoogleResponse> => {
  const response = await ApiService.post(`/auth/login/google`, body, { params });
  return response.data;
};
