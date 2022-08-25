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

const TabChapter: React.FC<TTabChapterProps> = ({ source, isAudioPlay, isAudioLoading, onBuyBook }) => {
  const dispatch = useDispatch();

  const [visibleBookRateFormModal, setVisibleBookRateFormModal] = useState<boolean>(false);
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const audioState = useSelector((state: TRootState) => state.uiReducer.audio);
  const bookData = productState?.book;

  const isBoughtBook = productState?.is_buy;
  const isEmpty = bookData?.voice && bookData?.voice?.length === 0;

  const handleOpenBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(true);
  };

  const handleCloseBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(false);
  };

  const handleClickChapter = (data: TProductVoice): void => {
    const isCurrentPlay = audioState?.voice?._id === data._id;
    if (isCurrentPlay) {
      if (audioState.isAudioPlay) dispatch(uiActions.setAudio({ isAudioPlay: false }));
      else dispatch(uiActions.setAudio({ isAudioPlay: true }));
    } else {
      dispatch(uiActions.setAudio({ voice: data, visible: true, productState, isAudioPlay: true }));
    }
  };

  return (
    <div className="TabChapter">
      {isEmpty ? (
        <Empty title="Không có dữ liệu danh sách chương" />
      ) : (
        <div className="TabChapter-chapter">
          {bookData?.voice?.map((item, index) => (
            <ChapterCard
              key={item._id}
              {...item}
              isActive={index === 0 || isBoughtBook}
              isAudioPlay={isAudioPlay && item._id === source?._id}
              isAudioLoading={isAudioLoading && item._id === source?._id}
              isPlayed={audioState.visible && item._id === source?._id}
              onClick={(): void => handleClickChapter?.(item)}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      )}

      <div className="TabChapter-btn">
        <Button title="Viết cảm nhận" onClick={handleOpenBookRateFormModal} disabled={!productState?.is_buy} />
      </div>

      <BookRateForm visible={visibleBookRateFormModal} onClose={handleCloseBookRateFormModal} />
    </div>
  );
};

export default TabChapter;
