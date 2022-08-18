/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react';
import TimeSlider from 'react-input-slider';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import env from '@/env';
import Loading from '@/components/Loading';
import { uiActions } from '@/redux/actions';
import { Paths } from '@/pages/routers';

import { TBookAudioProps } from './BookAudio.types';
import './BookAudio.scss';

const BookAudio: React.FC<TBookAudioProps> = ({
  isAudioPlay,
  source,
  onClickPrev,
  onClickNext,
  onChangeAudioIsPlay,
  onChangeAudioLoading,
}) => {
  const dispatch = useDispatch();
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const audioState = useSelector((state: TRootState) => state.uiReducer.audio);

  const bookData = audioState?.productState?.book;
  const audioRef = useRef<HTMLAudioElement>(null);

  const indexArray = (audioState?.voice?.index || 0) - 1;
  const nextChapter = bookData?.voice?.[indexArray + 1];
  const prevChapter = bookData?.voice?.[indexArray - 1];
  const disabledNextBtn = !productState?.is_buy || !nextChapter;
  const disabledPrevBtn = !productState?.is_buy || !prevChapter;

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState<any>(undefined);

  const handleBackPlayingBookPage = (): void => {
    if (audioState?.productState?.is_buy) {
      navigate(Paths.BookReader(bookData?.slug, bookData?._id));
    } else {
      navigate(Paths.BookDetail(bookData?.slug, bookData?._id));
    }
  };

  const getFileAudio = async (): Promise<void> => {
    if (source) {
      if (audioRef?.current) {
        audioRef.current?.pause();
        audioRef.current.src = '';
      }
      setDuration(0);
      setIsPlay(false);
      setIsLoading(true);
      setFile(`${env.api.baseUrl.service}/upload/get-voice/${source.src}`);
    }
  };

  const handleLoadedData = (): void => {
    setIsLoading(false);
    setDuration(audioRef?.current?.duration || 0);
    handlePlayPauseClick();
  };

  const handlePlayPauseClick = (): void => {
    if (audioRef?.current) {
      audioRef.current.muted = false;

      if (isPlay) {
        audioRef.current.pause();
        setIsPlay(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlay(true);
            })
            .catch(() => {
              setTimeout(() => {
                setIsPlay(false);
              }, 300);
            });
        }
      }
      setIsPlay(!isPlay);
    }
  };

  const handleTimeSliderChange = ({ x }: { x: number }): void => {
    if (audioRef?.current) {
      audioRef.current.currentTime = x;
      setCurrentTime(x);

      if (!isPlay) {
        setIsPlay(true);
        audioRef.current.play();
      }
    }
  };

  const handleClickSkip = (type: string): void => {
    if (audioRef?.current) {
      if (type === 'next') {
        audioRef.current.currentTime += 10;
      }

      if (type === 'prev') {
        audioRef.current.currentTime -= 10;
      }
      audioRef.current.play();
      setIsPlay(true);
    }
  };

  const handleClickAudioPrev = (): void => {
    onClickPrev?.();
    setIsPlay(false);
  };

  const handleClickAudioNext = (): void => {
    onClickNext?.();
    setIsPlay(false);
  };

  const handleCloseAudio = (): void => {
    dispatch(uiActions.setAudio({ visible: false }));
    audioRef?.current?.pause();
    setIsPlay(false);
  };

  useEffect(() => {
    getFileAudio();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  useEffect(() => {
    onChangeAudioIsPlay?.(isPlay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  useEffect(() => {
    if (isAudioPlay) {
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }
    setIsPlay(Boolean(isAudioPlay));
  }, [isAudioPlay]);

  useEffect(() => {
    onChangeAudioLoading?.(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <div className={classNames('BookAudio', { visible: audioState.visible })}>
      <div className="BookAudio-close" onClick={handleCloseAudio}>
        <Icon name={EIconName.CloseSquare} />
      </div>
      <div className="container">
        <div className="BookAudio-wrapper flex items-center">
          <div className="BookAudio-image" onClick={handleBackPlayingBookPage}>
            <img src={bookData?.images?.[0]} alt="" />
          </div>
          <div className="BookAudio-info">
            <div className="BookAudio-info-title" onClick={handleBackPlayingBookPage}>
              {bookData?.name}
            </div>
            <div className="BookAudio-info-author">{bookData?.author.name}</div>
          </div>
          <div
            className={classNames('BookAudio-control', {
              loading: isLoading,
            })}
          >
            <div className="BookAudio-control-chapter" onClick={handleBackPlayingBookPage}>
              {source?.name || 'Tâm sách Audio'}
            </div>
            <div className="BookAudio-control-bars">
              <TimeSlider
                axis="x"
                xmax={duration}
                x={currentTime}
                onChange={handleTimeSliderChange}
                styles={{
                  track: {
                    backgroundColor: EIconColor.SILVER,
                    height: '4px',
                    borderRadius: '4px',
                    width: '100%',
                  },
                  active: {
                    backgroundColor: EIconColor.WHITE,
                    height: '4px',
                  },
                  thumb: {
                    width: '14px',
                    height: '14px',
                    backgroundColor: EIconColor.ORANGE_PEEL,
                    border: `1px solid ${EIconColor.WHITE}`,
                    borderRadius: '50%',
                  },
                }}
              />
            </div>
            <div className="BookAudio-control-actions flex justify-around items-center">
              <div
                className={classNames('BookAudio-control-actions-item prev', { disabled: disabledPrevBtn })}
                onClick={(): void => {
                  if (!disabledPrevBtn) handleClickAudioPrev();
                }}
              >
                <Icon name={EIconName.Prev} color={EIconColor.WHITE} />
              </div>
              <div
                className="BookAudio-control-actions-item skip-prev flex items-center"
                onClick={(): void => handleClickSkip('prev')}
              >
                <Icon name={EIconName.TimePastPrev} color={EIconColor.WHITE} />
                <span>10s</span>
              </div>
              <div className="BookAudio-control-actions-item play" onClick={handlePlayPauseClick}>
                {isLoading ? (
                  <Loading />
                ) : (
                  <Icon name={isPlay ? EIconName.Pause : EIconName.Play} color={EIconColor.WHITE} />
                )}
              </div>
              <div
                className="BookAudio-control-actions-item skip-next flex items-center"
                onClick={(): void => handleClickSkip('next')}
              >
                <Icon name={EIconName.TimePastNext} color={EIconColor.WHITE} />
                <span>10s</span>
              </div>
              <div
                className={classNames('BookAudio-control-actions-item next', { disabled: disabledNextBtn })}
                onClick={(): void => {
                  if (!disabledNextBtn) handleClickAudioNext();
                }}
              >
                <Icon name={EIconName.Next} color={EIconColor.WHITE} />
              </div>
            </div>
          </div>

          {file && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
              ref={audioRef}
              playsInline
              crossOrigin="anonymous"
              src={file}
              onLoadedData={handleLoadedData}
              onTimeUpdate={(): void => setCurrentTime(audioRef?.current?.currentTime || 0)}
              onEnded={(): void => {
                if (!disabledNextBtn) handleClickAudioNext();
                else setIsPlay(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAudio;
