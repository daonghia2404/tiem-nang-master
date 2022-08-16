/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '@/components/Banner';
import CategoriesEmotion from '@/containers/CategoriesEmotion';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import BooksList from '@/containers/BooksList';
import { DEFAULT_PAGE } from '@/common/constants';
import { getMoodListAction, getReasonListAction } from '@/redux/actions/mood';
import { TRootState } from '@/redux/reducers';
import { EGetMoodListType, TMoodList } from '@/services/api';
import { getApophthganAction, getProductsByCategoriesAction, uiActions } from '@/redux/actions';

const Release: React.FC = () => {
  const dispatch = useDispatch();

  const moodsReasonsState = useSelector((state: TRootState) => state.uiReducer.moodsReasons);
  const getMoodListState = useSelector((state: TRootState) => state.moodReducer.getMoodListResponse?.data.records);
  const getReasonListState = useSelector((state: TRootState) => state.moodReducer.getReasonListResponse?.data.records);

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
    const [mood, reason] = moodsReasonsState;
    if (data.type === EGetMoodListType.MOOD) dispatch(uiActions.setMoodsReasons([data._id, reason]));
    if (data.type === EGetMoodListType.REASON) dispatch(uiActions.setMoodsReasons([mood, data._id]));
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
    const isAtLeastTwoCategories = moodsReasonsState?.filter((item) => Boolean(item?.trim()))?.length === 2;
    if (isAtLeastTwoCategories) {
      dispatch(
        getApophthganAction.request({
          params: {
            page: DEFAULT_PAGE,
            pageSize: 100,
            mood: moodsReasonsState[0],
            reason: moodsReasonsState[1],
          },
        }),
      );
    }
  }, [dispatch, moodsReasonsState]);

  const getProductsByMoodAndReasonList = useCallback(() => {
    const isAtLeastTwoCategories = moodsReasonsState?.filter((item) => Boolean(item?.trim()))?.length === 2;
    if (isAtLeastTwoCategories) {
      dispatch(getProductsByCategoriesAction.request({ body: moodsReasonsState }));
    }
  }, [dispatch, moodsReasonsState]);

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
      <CategoriesEmotion ids={moodsReasonsState} data={dataCategoriesEmotion} onClickItem={handleClickEmotion} />
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
