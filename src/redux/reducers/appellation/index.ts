import { createReducer } from 'deox';

import { TGetAppellationResponse, TGetMyAppellationResponse } from '@/services/api/appellation';
import { getAppellationAction, getMyAppellationAction } from '@/redux/actions';
import { getAppellationUpdateState } from './get-appellation';
import { getMyAppellationUpdateState } from './get-my-appellation';

export type TAppellationState = {
  getAppellationResponse?: TGetAppellationResponse;
  getMyAppellationResponse?: TGetMyAppellationResponse;
};

const initialState: TAppellationState = {
  getAppellationResponse: undefined,
  getMyAppellationResponse: undefined,
};

const AppellationReducer = createReducer(initialState, (handleAction) => [
  handleAction(getAppellationAction.success, getAppellationUpdateState),
  handleAction(getMyAppellationAction.success, getMyAppellationUpdateState),
]);

export default AppellationReducer;
