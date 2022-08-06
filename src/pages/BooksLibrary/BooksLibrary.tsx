/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '@/components/Banner';
import CategoriesEmotion from '@/containers/CategoriesEmotion';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import BooksList from '@/containers/BooksList';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import {
  EGetCategoryListAction,
  getCategoryListAction,
  getFilterProductListAction,
  getProductsByCategoriesAction,
} from '@/redux/actions';
import {
  TFilterProductList,
  TGetCategoryListParams,
  TGetProductsByCategoriesBody,
  TGetProductsByCategoriesPaths,
} from '@/services/api';
import { TCategory } from '@/common/models';
import { getTotalPage, showNotification } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { ETypeNotification } from '@/common/enums';

const BooksLibrary: React.FC = () => {
  const dispatch = useDispatch();

  const [getProductsParamsRequest, setGetProductsParamsRequest] = useState<{
    body?: TGetProductsByCategoriesBody;
    paths?: TGetProductsByCategoriesPaths;
  }>({
    body: [],
    paths: undefined,
  });
  const getProductsByCategoryState = useSelector(
    (state: TRootState) => state.productReducer.getProductsByCategoriesResponse?.data,
  );

  const [getCategoryListParamsRequest, setGetCategoryListParamsRequest] = useState<TGetCategoryListParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE * 2,
  });
  const [categoryList, setCategoryList] = useState<TCategory[]>([]);
  const getCategoryListTotalState = useSelector(
    (state: TRootState) => state.categoryReducer.getCategoryListResponse?.data.total,
  );
  const getCategoryListLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetCategoryListAction.GET_CATEGORY_LIST],
  );

  const getProductFilterList = useSelector(
    (state: TRootState) => state.productReducer.getFilterProductListResponse?.data,
  );

  const isLoadMore =
    getCategoryListParamsRequest.page <
    getTotalPage(getCategoryListTotalState || 0, getCategoryListParamsRequest.pageSize);

  const dataCategoriesEmotion = [
    {
      title: 'Chọn 3 danh mục',
      list: categoryList,
    },
  ];

  const handleClickCategory = (data: TCategory): void => {
    const isExisted = getProductsParamsRequest.body?.includes(data._id);
    const isMaxCategoriesFilter = getProductsParamsRequest.body?.length === 3;

    if (isExisted) {
      const newFilterCategories = getProductsParamsRequest.body?.filter((item) => item !== data._id);
      setGetProductsParamsRequest({
        ...getProductsParamsRequest,
        body: newFilterCategories,
      });
    } else if (isMaxCategoriesFilter) {
      showNotification(ETypeNotification.ERROR, 'Chỉ được chọn tối đa ba danh mục');
    } else {
      setGetProductsParamsRequest({
        ...getProductsParamsRequest,
        body: [...(getProductsParamsRequest.body || []), data._id],
      });
    }
  };

  const handleFilterProduct = (data: TFilterProductList): void => {
    setGetProductsParamsRequest({
      ...getProductsParamsRequest,
      paths: {
        filter: data._id,
      },
    });
  };

  const handleLoadMore = (): void => {
    if (isLoadMore) {
      setGetCategoryListParamsRequest({
        ...getCategoryListParamsRequest,
        page: getCategoryListParamsRequest.page + 1,
      });
    }
  };

  const getCategoryList = useCallback(() => {
    dispatch(
      getCategoryListAction.request({ params: getCategoryListParamsRequest }, (response): void => {
        const isFirstFetching = getCategoryListParamsRequest.page === DEFAULT_PAGE;
        const data = response.data.records.flat();
        setCategoryList(isFirstFetching ? data : [...categoryList, ...data]);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getCategoryListParamsRequest]);

  const getFilterProductList = useCallback(() => {
    dispatch(getFilterProductListAction.request({}));
  }, [dispatch]);

  const getProductsByCategory = useCallback(() => {
    const isAtLeastThreeCategories = getProductsParamsRequest.body?.length === 3;
    if (isAtLeastThreeCategories) {
      dispatch(getProductsByCategoriesAction.request({ ...getProductsParamsRequest }));
    }
  }, [dispatch, getProductsParamsRequest]);

  useEffect(() => {
    getProductsByCategory();
  }, [getProductsByCategory]);

  useEffect(() => {
    getCategoryList();
  }, [getCategoryList]);

  useEffect(() => {
    getFilterProductList();
  }, [getFilterProductList]);

  return (
    <div className="BooksLibrary">
      <Banner image={ImageBanner1} />
      <CategoriesEmotion
        data={dataCategoriesEmotion}
        showLoadMore={isLoadMore}
        onLoadMore={handleLoadMore}
        ids={getProductsParamsRequest.body}
        loading={getCategoryListLoading}
        onClickItem={handleClickCategory}
      />
      <BooksList
        ids={[getProductsParamsRequest.paths?.filter]}
        dataFilter={getProductFilterList}
        data={getProductsByCategoryState}
        onClickFilter={handleFilterProduct}
        emptyTitle="Lưa chọn 3 danh mục để tìm kiếm"
      />
    </div>
  );
};

export default BooksLibrary;
