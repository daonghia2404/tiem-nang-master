import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TAuthLoginFacebookParams = unknown;
export type TAuthLoginFacebookBody = {
  token: string;
};

export type TAuthLoginFacebookMaterials = {
  params?: TAuthLoginFacebookParams;
  body?: TAuthLoginFacebookBody;
};

export type TAuthLoginFacebookResponse = TCommonResponse & {
  data: { token: string };
};

// FUNCTION

export const authLoginFacebook = async ({
  params,
  body,
}: TAuthLoginFacebookMaterials): Promise<TAuthLoginFacebookResponse> => {
  const response = await ApiService.post(`/auth/login/facebook`, body, { params });
  return response.data;
};
