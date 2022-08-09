import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetFilePaths = {
  name: string | number;
};
export type TGetFileParams = unknown;

export type TGetFileMaterials = {
  paths?: TGetFilePaths;
  params?: TGetFileParams;
};

export type TGetFileResponse = TCommonResponse & {
  data: string;
};

// FUNCTION

export const getFile = async ({ paths, params }: TGetFileMaterials): Promise<TGetFileResponse> => {
  const response = await ApiService.get(`/upload/get-file/${paths?.name}`, { params });
  return response.data;
};
