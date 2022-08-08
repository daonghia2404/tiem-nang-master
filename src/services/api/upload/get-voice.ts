import ApiService from '@/services/api';

// TYPES

export type TGetVoicePaths = {
  name: string | number;
};
export type TGetVoiceParams = unknown;

export type TGetVoiceMaterials = {
  paths?: TGetVoicePaths;
  params?: TGetVoiceParams;
};

export type TGetVoiceResponse = any;

// FUNCTION

export const getVoice = async ({ paths, params }: TGetVoiceMaterials): Promise<TGetVoiceResponse> => {
  const response = await ApiService.get(`/upload/get-voice/${paths?.name}`, { params });
  return response.data;
};
