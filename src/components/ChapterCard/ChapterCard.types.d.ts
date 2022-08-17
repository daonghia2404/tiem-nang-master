export type TChapterCardProps = {
  name: string;
  src: string;
  isActive?: boolean;
  isAudioPlay?: boolean;
  isAudioLoading?: boolean;
  isPlayed?: boolean;
  onChangeAudioIsPlay?: (isPlay: boolean) => void;
  onClick?: () => void;
  onBuyBook?: () => void;
};
