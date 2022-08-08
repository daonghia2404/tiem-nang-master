import ApiService from '@/services/api';

// TYPES

export type TDownloadProductFilePaths = {
  pid: string | number;
  fid: string | number;
};
export type TDownloadProductFileParams = unknown;

export type TDownloadProductFileMaterials = {
  paths?: TDownloadProductFilePaths;
  params?: TDownloadProductFileParams;
};

export type TDownloadProductFileResponse = Blob | File;

// FUNCTION

export const downloadProductFile = async ({
  paths,
  params,
}: TDownloadProductFileMaterials): Promise<TDownloadProductFileResponse> => {
  const response = await ApiService.get(`/product/download-file/${paths?.pid}/${paths?.fid}`, { params });
  return response.data;
};
