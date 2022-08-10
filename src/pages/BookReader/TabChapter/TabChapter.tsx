/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import BookRateForm from '@/containers/BookRate/BookRateForm';
import { TRootState } from '@/redux/reducers';
import Empty from '@/components/Empty';
import ChapterCard from '@/components/ChapterCard';
import { TProductVoice } from '@/common/models';
import { uiActions } from '@/redux/actions';

import { TTabChapterProps } from './TabChapter.types';
import './TabChapter.scss';

const TabChapter: React.FC<TTabChapterProps> = ({ source, isAudioPlay, isAudioLoading }) => {
  const dispatch = useDispatch();

  const [visibleBookRateFormModal, setVisibleBookRateFormModal] = useState<boolean>(false);
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;
  const isEmpty = bookData?.voice && bookData?.voice?.length === 0;

  const handleOpenBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(true);
  };

  const handleCloseBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(false);
  };

  const handleClickChapter = (data: TProductVoice): void => {
    dispatch(uiActions.setAudio({ voice: data, visible: true }));
  };

  return (
    <div className="TabChapter">
      {isEmpty ? (
        <Empty title="Không có dữ liệu danh sách chương" />
      ) : (
        <div className="TabChapter-chapter">
          {bookData?.voice?.map((item) => (
            <ChapterCard
              key={item._id}
              {...item}
              isActive
              isAudioPlay={isAudioPlay && item._id === source?._id}
              isAudioLoading={isAudioLoading && item._id === source?._id}
              isPlayed={item._id === source?._id}
              onClick={(): void => handleClickChapter?.(item)}
            />
          ))}
        </div>
      )}

      <div className="TabChapter-btn">
        <Button title="Viết cảm nhận" onClick={handleOpenBookRateFormModal} />
      </div>

      <BookRateForm visible={visibleBookRateFormModal} onClose={handleCloseBookRateFormModal} />
    </div>
  );
};

export default TabChapter;
