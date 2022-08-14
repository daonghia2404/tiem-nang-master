import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Banner from '@/components/Banner';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import BooksList from '@/containers/BooksList';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getProductsSearchAction } from '@/redux/actions';
import { TGetProductsSearchParams } from '@/services/api';
import { TRootState } from '@/redux/reducers';
import { scrollToTop } from '@/utils/functions';

const BooksListSearch: React.FC = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const getProductsSearchState = useSelector(
    (state: TRootState) => state.productReducer.getProductsSearchResponse?.data,
  );

  const [getProductsSearchParamsRequest, setGetProductsSearchParamsRequest] = useState<TGetProductsSearchParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    keyword,
  });

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetProductsSearchParamsRequest({
      ...getProductsSearchParamsRequest,
      page,
      pageSize: pageSize || getProductsSearchParamsRequest.pageSize,
    });
    scrollToTop();
  };

  const getProductsListSearch = useCallback(() => {
    dispatch(getProductsSearchAction.request({ params: getProductsSearchParamsRequest }));
  }, [dispatch, getProductsSearchParamsRequest]);

  useEffect(() => {
    getProductsListSearch();
  }, [getProductsListSearch]);

  useEffect(() => {
    setGetProductsSearchParamsRequest({
      ...getProductsSearchParamsRequest,
      keyword,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <div className="BooksListSearch">
      <Banner image={ImageBanner1} title="Tìm kiếm" />

      <BooksList
        data={getProductsSearchState?.records}
        emptyTitle="Không có dữ liệu cho kết quả tìm kiếm"
        page={getProductsSearchParamsRequest.page}
        pageSize={getProductsSearchParamsRequest.pageSize}
        total={getProductsSearchState?.total}
        onPaginateChange={handlePageChange}
      />
    </div>
  );
};

export default BooksListSearch;
