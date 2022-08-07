import { TTransactionState } from '@/redux/reducers/transaction';
import { TGetTransactionSuccess } from '@/redux/actions/transaction';

export const getTransactionUpdateState = (
  state: TTransactionState,
  action: TGetTransactionSuccess,
): TTransactionState => ({
  ...state,
  getTransactionResponse: action.payload.response,
});
