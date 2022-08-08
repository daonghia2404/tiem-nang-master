import React, { useEffect, useRef, useState } from 'react';
import TimeSlider from 'react-input-slider';
import { useSelector } from 'react-redux';

import { formatDuration } from '@/utils/functions';
import Loading from '@/components/Loading';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';

import { TBookAudioProps } from './BookAudio.types';
import './BookAudio.scss';

const BookAudio: React.FC<TBookAudioProps> = ({ image, title, src, id, onClickPrev, onClickNext }) => {
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [file, setFile] = useState<any>(undefined);

  const getFileAudio = async (): Promise<void> => {
    if (src) {
      const fileFetch = await fetch(src);
      const fileBlob = await fileFetch.blob();
      setFile(window.URL.createObjectURL(fileBlob));
    }
  };

  const isLoading = duration === 0;

  const handleLoadedData = (): void => {
    setDuration(audioRef?.current?.duration || 0);
    if (isPlay) audioRef?.current?.play();
  };

  const handlePausePlayClick = (): void => {
    if (isPlay) {
      audioRef?.current?.pause();
    } else {
      audioRef?.current?.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }: { x: number }): void => {
    if (audioRef?.current) {
      audioRef.current.currentTime = x;
      setCurrentTime(x);

      if (!isPlay) {
        setPlay(true);
        audioRef.current.play();
      }
    }
  };

  const handleClickAudioPrev = (): void => {
    onClickPrev?.();
  };

  const handleClickAudioNext = (): void => {
    onClickNext?.();
  };

  useEffect(() => {
    setDuration(0);
    getFileAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div className="BookAudio">
      <div className="container">
        <div className="BookAudio-wrapper flex items-center">
          {/* {isLoading && <Loading />} */}
          <div className="BookAudio-image">
            <img src={bookData?.image} alt="" />
          </div>
          <div className="BookAudio-info">
            <div className="BookAudio-info-title">{bookData?.name}</div>
            <div className="BookAudio-info-author">{bookData?.author.name}</div>
          </div>
          <div className="BookAudio-control">
            <div className="BookAudio-control-chapter">Chương1: Lorem ipsum dolor sit amet, consec</div>
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
              {/* <div className="BookAudio-control-bars-current">
            {audioRef?.current?.currentTime ? formatDuration(audioRef?.current?.currentTime) : '00:00:00'}
          </div>
          <div className="BookAudio-control-bars-total">{duration ? formatDuration(duration) : '00:00:00'}</div> */}
            </div>
            <div className="BookAudio-control-actions flex justify-around items-center">
              <div className="BookAudio-control-actions-item .prev" onClick={handleClickAudioPrev}>
                <Icon name={EIconName.Prev} color={EIconColor.WHITE} />
              </div>
              <div
                className="BookAudio-control-actions-item .skip-prev flex items-center"
                onClick={handleClickAudioPrev}
              >
                <Icon name={EIconName.TimePastPrev} color={EIconColor.WHITE} />
                <span>10s</span>
              </div>
              <div className="BookAudio-control-actions-item .play" onClick={handlePausePlayClick}>
                <Icon name={isPlay ? EIconName.Pause : EIconName.Play} color={EIconColor.WHITE} />
              </div>
              <div
                className="BookAudio-control-actions-item .skip-next flex items-center"
                onClick={handleClickAudioPrev}
              >
                <Icon name={EIconName.TimePastNext} color={EIconColor.WHITE} />
                <span>10s</span>
              </div>
              <div className="BookAudio-control-actions-item .next" onClick={handleClickAudioNext}>
                <Icon name={EIconName.Next} color={EIconColor.WHITE} />
              </div>
            </div>
          </div>

          {file && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <audio
              ref={audioRef}
              src={file}
              onLoadedData={handleLoadedData}
              onTimeUpdate={(): void => setCurrentTime(audioRef?.current?.currentTime || 0)}
              onEnded={(): void => setPlay(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAudio;
