import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import Icon, { EIconName } from '@/components/Icon';
import Loading from '@/components/Loading';
import env from '@/env';
import { uiActions } from '@/redux/actions';

import { TChapterCardProps } from './ChapterCard.types.d';
import './ChapterCard.scss';

const ChapterCard: React.FC<TChapterCardProps> = ({
  src,
  name,
  isActive,
  isAudioPlay,
  isAudioLoading,
  isPlayed,
  onBuyBook,
  onClick,
}) => {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [source, setSource] = useState('');

  const isNotPlayAudioFile = typeof isPlayed !== 'undefined';

  const showIconChapter = (): EIconName => {
    switch (true) {
      case isAudioPlay:
      case isActive && isPlaying:
        return EIconName.Pause;
      case isActive && !isPlaying:
        return EIconName.Play;
      default:
        return EIconName.Locker;
    }
  };

  const handleClick = (): void => {
    if (!loading && isActive) {
      if (!isNotPlayAudioFile) {
        if (isPlaying) {
          setIsPlaying(false);
        } else if (!source) {
          setLoading(true);
          setSource(`${env.api.baseUrl.service}/upload/get-voice/${src}`);
        } else {
          setIsPlaying(true);
        }
      } else {
        onClick?.();
      }
    } else {
      onBuyBook?.();
    }
  };

  const handleClickChapterCardIcon = (): void => {
    if (!loading) {
      dispatch(uiActions.setAudio({ isAudioLoading: !isAudioPlay }));
    }
  };

  const handleLoadSourceSuccess = (): void => {
    setLoading(false);
    if (!isNotPlayAudioFile) {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef?.current) {
      const audio = audioRef?.current;
      if (isPlaying) audio.play();
      else audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    setLoading(Boolean(isAudioLoading));
  }, [isAudioLoading]);

  return (
    <div
      className={classNames('ChapterCard flex items-center justify-between', { played: isPlayed })}
      onClick={handleClick}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {source && <audio ref={audioRef} src={source} onLoadedData={handleLoadSourceSuccess} />}

      <div className="ChapterCard-title">{name}</div>
      <div className="ChapterCard-icon" onClick={handleClickChapterCardIcon}>
        {loading ? <Loading /> : <Icon name={showIconChapter()} />}
      </div>
    </div>
  );
};

export default ChapterCard;
