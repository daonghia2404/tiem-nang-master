import ApiService from '@/services/api';

// TYPES

export type TAuthLoginFacebookParams = unknown;
export type TAuthLoginFacebookBody = {
  token: string;
  token_device: string;
};

export type TAuthLoginFacebookMaterials = {
  params?: TAuthLoginFacebookParams;
  body?: TAuthLoginFacebookBody;
};

export type TAuthLoginFacebookResponse = unknown;

// FUNCTION

export const authLoginFacebook = async ({
  params,
  body,
}: TAuthLoginFacebookMaterials): Promise<TAuthLoginFacebookResponse> => {
  const response = await ApiService.post(`/auth/login/facebook`, body, { params });
  return response.data;
};
