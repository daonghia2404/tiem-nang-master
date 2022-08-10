import { createActionCreator } from 'deox';

import { EUIAction } from './constants';
import { TResetActionStatus, TSetAudio, TSetAudioData, TSetDevice } from './types';

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
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
};
