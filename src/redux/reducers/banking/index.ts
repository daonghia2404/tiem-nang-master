import { createReducer } from 'deox';

import { TGetBanksListResponse } from '@/services/api/banking';
import { getBanksListAction } from '@/redux/actions';
import { getBanksListUpdateState } from './get-banks-list';

export type TBankingState = {
  getBanksListResponse?: TGetBanksListResponse;
};

const initialState: TBankingState = {
  getBanksListResponse: undefined,
};

const BankingReducer = createReducer(initialState, (handleAction) => [
  handleAction(getBanksListAction.success, getBanksListUpdateState),
]);

export default BankingReducer;
