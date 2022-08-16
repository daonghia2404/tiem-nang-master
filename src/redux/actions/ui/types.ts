import { TProduct, TProductVoice } from '@/common/models';
import { EUIAction } from './constants';

export type TSetAudioData = {
  voice?: TProductVoice;
  isAudioLoading?: boolean;
  isAudioPlay?: boolean;
  visible?: boolean;
  productState?: { book: TProduct; is_buy: boolean; is_save: boolean };
};

export type TSetDevice = { type: EUIAction.SET_DEVICE; payload: { deviceWidth: number } };
export type TToggleModalAuth = { type: EUIAction.TOGGLE_MODAL_AUTH; payload: { visible: boolean } };
export type TSetMoodsReasons = { type: EUIAction.SET_MOODS_REASONS; payload: { data: string[] } };
export type TSetCategories = { type: EUIAction.SET_CATEGOIRES; payload: { data: string[] } };
export type TSetAudio = { type: EUIAction.SET_AUDIO; payload: { data: TSetAudioData } };
export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
