import { TProductVoice } from '@/common/models';

export type TBookAudioProps = {
  source?: TProductVoice;
  isAudioPlay?: boolean;
  onClickPrev?: () => void;
  onClickNext?: () => void;
  onChangeAudioIsPlay?: (isPlay: boolean) => void;
  onChangeAudioLoading?: (isLoading: boolean) => void;
};
