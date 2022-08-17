import { TProductVoice } from '@/common/models';

export type TTabChapterProps = {
  source?: TProductVoice;
  isAudioPlay?: boolean;
  isAudioLoading?: boolean;
  onBuyBook?: () => void;
};
