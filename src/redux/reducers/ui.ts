import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';
import { TSetAudioData } from '@/redux/actions/ui/types';

export enum EDeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export type TInitialState = {
  device: {
    type: EDeviceType;
    width: number;
    isMobile: boolean;
  };
  audio: TSetAudioData;
  visibleModalAuth: boolean;
  categories: string[];
  moodsReasons: string[];
};

const initialState: TInitialState = {
  device: {
    type: window.innerWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
    width: window.innerWidth,
    isMobile: window.innerWidth <= 991,
  },
  audio: {
    voice: undefined,
    isAudioLoading: false,
    isAudioPlay: false,
    visible: false,
  },
  visibleModalAuth: false,
  categories: ['', '', ''],
  moodsReasons: ['', ''],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      width: payload.deviceWidth,
      isMobile: payload.deviceWidth <= 991,
    },
  })),
  handleAction(uiActions.setAudio, (state, { payload }) => ({
    ...state,
    audio: {
      ...state.audio,
      ...payload.data,
    },
  })),
  handleAction(uiActions.toggleModalAuth, (state, { payload }) => ({
    ...state,
    visibleModalAuth: payload.visible,
  })),
  handleAction(uiActions.setCategories, (state, { payload }) => ({
    ...state,
    categories: payload.data,
  })),
  handleAction(uiActions.setMoodsReasons, (state, { payload }) => ({
    ...state,
    moodsReasons: payload.data,
  })),
]);

export default reducer;
