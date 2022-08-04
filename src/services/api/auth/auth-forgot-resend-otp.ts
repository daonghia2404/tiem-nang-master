import ApiService from '@/services/api';

// TYPES

export type TAuthForgotResendOtpParams = unknown;
export type TAuthForgotResendOtpBody = unknown;
export type TAuthForgotResendOtpHeaders = {
  token: string;
};

export type TAuthForgotResendOtpMaterials = {
  headers?: TAuthForgotResendOtpHeaders;
  params?: TAuthForgotResendOtpParams;
  body?: TAuthForgotResendOtpBody;
};

export type TAuthForgotResendOtpResponse = unknown;

// FUNCTION

export const authForgotResendOtp = async ({
  params,
  body,
  headers,
}: TAuthForgotResendOtpMaterials): Promise<TAuthForgotResendOtpResponse> => {
  const response = await ApiService.post(`/auth/forgot-resend-otp`, body, { params, headers });
  return response.data;
};
