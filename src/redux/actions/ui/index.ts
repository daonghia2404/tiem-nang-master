import { createActionCreator } from 'deox';

import { EUIAction } from './constants';
import {
  TResetActionStatus,
  TSetAudio,
  TSetAudioData,
  TSetCategories,
  TSetDevice,
  TSetMoodsReasons,
  TToggleModalAuth,
} from './types';

export const uiActions = {
  setDevice: createActionCreator(
    EUIAction.SET_DEVICE,
    (resolve) =>
      (deviceWidth: number): TSetDevice =>
        resolve({ deviceWidth }),
  ),
  setAudio: createActionCreator(
    EUIAction.SET_AUDIO,
    (resolve) =>
      (data: TSetAudioData): TSetAudio =>
        resolve({ data }),
  ),
  toggleModalAuth: createActionCreator(
    EUIAction.TOGGLE_MODAL_AUTH,
    (resolve) =>
      (visible: boolean): TToggleModalAuth =>
        resolve({ visible }),
  ),
  setMoodsReasons: createActionCreator(
    EUIAction.SET_MOODS_REASONS,
    (resolve) =>
      (data: string[]): TSetMoodsReasons =>
        resolve({ data }),
  ),
  setCategories: createActionCreator(
    EUIAction.SET_CATEGOIRES,
    (resolve) =>
      (data: string[]): TSetCategories =>
        resolve({ data }),
  ),
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};
