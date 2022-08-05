import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetAdvisoryIssuesParams = {
  page: number;
  pageSize: number;
};

export type TGetAdvisoryIssuesMaterials = {
  params?: TGetAdvisoryIssuesParams;
};

export type TGetAdvisoryIssuesResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TAdvisoryIssue[];
  };
};

export type TAdvisoryIssue = {
  author: string;
  createdAt: string;
  isDeleted: boolean;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

// FUNCTION

export const getAdvisoryIssues = async ({
  params,
}: TGetAdvisoryIssuesMaterials): Promise<TGetAdvisoryIssuesResponse> => {
  const response = await ApiService.get(`/advisory/issue-type`, { params });
  return response.data;
};
