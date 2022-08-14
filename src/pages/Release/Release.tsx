/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '@/components/Banner';
import CategoriesEmotion from '@/containers/CategoriesEmotion';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import BooksList from '@/containers/BooksList';
import { DEFAULT_PAGE } from '@/common/constants';
import { getMoodListAction, getReasonListAction } from '@/redux/actions/mood';
import { TRootState } from '@/redux/reducers';
import { EGetMoodListType, TGetApophthganParams, TMoodList } from '@/services/api';
import { getApophthganAction, getProductsByCategoriesAction } from '@/redux/actions';

const Release: React.FC = () => {
  const dispatch = useDispatch();

  const getMoodListState = useSelector((state: TRootState) => state.moodReducer.getMoodListResponse?.data.records);
  const getReasonListState = useSelector((state: TRootState) => state.moodReducer.getReasonListResponse?.data.records);
  const [getApophthganParamsRequest, setGetApophthganParamsRequest] = useState<TGetApophthganParams>({
    page: DEFAULT_PAGE,
    pageSize: 100,
  });
  const getProductsByCategoriesState = useSelector(
    (state: TRootState) => state.productReducer.getProductsByCategoriesResponse?.data,
  );
  const getApophthganState = useSelector(
    (state: TRootState) => state.apophthganReducer.getApophthganResponse?.data?.records,
  );

  const dataCategoriesEmotion = [
    {
      title: 'Tâm trạng hiện tại',
      list: getMoodListState || [],
    },
    {
      title: 'Căn nguyên',
      list: getReasonListState || [],
    },
  ];

  const handleClickEmotion = (data: TMoodList): void => {
    if (data.type === EGetMoodListType.MOOD)
      setGetApophthganParamsRequest({ ...getApophthganParamsRequest, mood: data._id });
    if (data.type === EGetMoodListType.REASON)
      setGetApophthganParamsRequest({ ...getApophthganParamsRequest, reason: data._id });
  };

  const getMoodList = useCallback(() => {
    const params = {
      page: DEFAULT_PAGE,
      pageSize: 100,
    };
    dispatch(getMoodListAction.request({ params }));
  }, [dispatch]);

  const getReasonList = useCallback(() => {
    const params = {
      page: DEFAULT_PAGE,
      pageSize: 100,
    };
    dispatch(getReasonListAction.request({ params }));
  }, [dispatch]);

  const getApophthganList = useCallback(() => {
    if (getApophthganParamsRequest.mood && getApophthganParamsRequest.reason) {
      dispatch(getApophthganAction.request({ params: getApophthganParamsRequest }));
    }
  }, [dispatch, getApophthganParamsRequest]);

  const getProductsByMoodAndReasonList = useCallback(() => {
    if (getApophthganParamsRequest.mood && getApophthganParamsRequest.reason) {
      const body = [getApophthganParamsRequest.mood, getApophthganParamsRequest.reason];
      dispatch(getProductsByCategoriesAction.request({ body }));
    }
  }, [dispatch, getApophthganParamsRequest]);

  useEffect(() => {
    getApophthganList();
  }, [getApophthganList]);

  useEffect(() => {
    getProductsByMoodAndReasonList();
  }, [getProductsByMoodAndReasonList]);

  useEffect(() => {
    getMoodList();
  }, [getMoodList]);

  useEffect(() => {
    getReasonList();
  }, [getReasonList]);

  useEffect(() => {
    return (): void => {
      dispatch(getApophthganAction.success(undefined));
      dispatch(getProductsByCategoriesAction.success(undefined));
    };
  }, [dispatch]);

  return (
    <div className="Release">
      <Banner image={ImageBanner1} />
      <CategoriesEmotion
        ids={[getApophthganParamsRequest?.mood, getApophthganParamsRequest?.reason]}
        data={dataCategoriesEmotion}
        onClickItem={handleClickEmotion}
      />
      <BooksList
        useCarousel
        title="Danh ngôn"
        data={getApophthganState as any}
        emptyTitle="Không có dữ liệu danh ngôn"
      />
      <BooksList
        useCarousel
        title="Tựa sách nên đọc"
        data={getProductsByCategoriesState}
        emptyTitle="Không có dữ liệu tựa sách nên đọc"
      />
    </div>
  );
};

export default Release;
