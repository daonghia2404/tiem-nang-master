import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import BookAudio from '@/containers/BookAudio';
import { TRootState } from '@/redux/reducers';
import { uiActions } from '@/redux/actions';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;

  const audioState = useSelector((state: TRootState) => state.uiReducer.audio);

  const handleChangeAudio = (type: string): void => {
    if (audioState?.voice) {
      const indexArray = audioState?.voice.index - 1;
      const nextChapter = bookData?.voice?.[indexArray + 1];
      const prevChapter = bookData?.voice?.[indexArray - 1];

      if (type === 'prev' && prevChapter) {
        dispatch(uiActions.setAudio({ voice: prevChapter }));
      }
      if (type === 'next' && nextChapter) {
        dispatch(uiActions.setAudio({ voice: nextChapter }));
      }
    }
  };

  const handleChangeAudioPlay = (status: boolean): void => {
    dispatch(uiActions.setAudio({ isAudioPlay: status }));
  };
  const handleChangeAudioLoading = (status: boolean): void => {
    dispatch(uiActions.setAudio({ isAudioLoading: status }));
  };

  return (
    <div className="Guest">
      <div className="Guest-header">
        <Header />
      </div>
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>

      <BookAudio
        source={audioState?.voice}
        isAudioPlay={audioState?.isAudioPlay}
        onClickPrev={(): void => handleChangeAudio('prev')}
        onClickNext={(): void => handleChangeAudio('next')}
        onChangeAudioIsPlay={handleChangeAudioPlay}
        onChangeAudioLoading={handleChangeAudioLoading}
      />
    </div>
  );
};

export default Guest;
