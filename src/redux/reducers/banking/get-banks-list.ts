import { TBankingState } from '@/redux/reducers/banking';
import { TGetBanksListSuccess } from '@/redux/actions/banking';

export const getBanksListUpdateState = (state: TBankingState, action: TGetBanksListSuccess): TBankingState => ({
  ...state,
  getBanksListResponse: action.payload.response,
});
