export type TCommonResponse = {
  statusCode: number;
  message: string;
};

export type TCommonPaginate = {
  currentPage: number;
  pageSize: number;
  total: number;
};
