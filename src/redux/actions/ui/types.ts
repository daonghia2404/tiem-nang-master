import { TProductVoice } from '@/common/models';
import { EUIAction } from './constants';

export type TSetAudioData = {
  voice?: TProductVoice;
  isAudioLoading?: boolean;
  isAudioPlay?: boolean;
  visible?: boolean;
};

export type TSetDevice = { type: EUIAction.SET_DEVICE; payload: { deviceWidth: number } };
export type TSetAudio = { type: EUIAction.SET_AUDIO; payload: { data: TSetAudioData } };
export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
