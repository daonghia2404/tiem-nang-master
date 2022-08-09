import { TProductVoice } from '@/common/models';

export type TTabChapterProps = {
  source?: TProductVoice;
  isAudioPlay?: boolean;
  isAudioLoading?: boolean;
  onClickChapter?: (data: TProductVoice) => void;
  onChangeAudioIsPlay?: (isPlay: boolean) => void;
};
