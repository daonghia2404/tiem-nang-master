import ApiService from '@/services/api';

// TYPES

export type TAuthRegisterResendOtpParams = unknown;
export type TAuthRegisterResendOtpBody = unknown;
export type TAuthRegisterResendOtpHeaders = {
  token: string;
};

export type TAuthRegisterResendOtpMaterials = {
  headers?: TAuthRegisterResendOtpHeaders;
  params?: TAuthRegisterResendOtpParams;
  body?: TAuthRegisterResendOtpBody;
};

export type TAuthRegisterResendOtpResponse = unknown;

// FUNCTION

export const authRegisterResendOtp = async ({
  params,
  body,
  headers,
}: TAuthRegisterResendOtpMaterials): Promise<TAuthRegisterResendOtpResponse> => {
  const response = await ApiService.post(`/auth/register-resend-otp`, body, { params, headers });
  return response.data;
};
