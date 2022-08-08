import React, { useEffect, useRef, useState } from 'react';

import Icon, { EIconName } from '@/components/Icon';
import Loading from '@/components/Loading';
import env from '@/env';

import { TChapterCardProps } from './ChapterCard.types.d';
import './ChapterCard.scss';

const ChapterCard: React.FC<TChapterCardProps> = ({ src, name, isActive }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [source, setSource] = useState('');

  const showIconChapter = (): EIconName => {
    switch (true) {
      case isActive && isPlaying:
        return EIconName.Pause;
      case isActive && !isPlaying:
        return EIconName.Play;
      default:
        return EIconName.Locker;
    }
  };

  const handleClick = (): void => {
    if (isPlaying) {
      setIsPlaying(false);
    } else if (!source) {
      setLoading(true);
      setSource(`${env.api.baseUrl.service}/upload/get-voice/${src}`);
    } else {
      setLoading(false);
      setIsPlaying(true);
    }
  };

  const handleLoadSourceSuccess = (): void => {
    handleClick();
  };

  useEffect(() => {
    if (audioRef?.current) {
      const audio = audioRef?.current;
      if (isPlaying) audio.play();
      else audio.pause();
    }
  }, [isPlaying]);

  return (
    <div className="ChapterCard flex items-center justify-between" onClick={handleClick}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {source && <audio ref={audioRef} src={source} onLoadedData={handleLoadSourceSuccess} />}

      <div className="ChapterCard-title">{name}</div>
      <div className="ChapterCard-icon">{loading ? <Loading /> : <Icon name={showIconChapter()} />}</div>
    </div>
  );
};

export default ChapterCard;
