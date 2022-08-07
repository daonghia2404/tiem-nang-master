import { createReducer } from 'deox';

import { TGetTransactionResponse } from '@/services/api/transaction';
import { getTransactionAction } from '@/redux/actions';
import { getTransactionUpdateState } from './get-transaction';

export type TTransactionState = {
  getTransactionResponse?: TGetTransactionResponse;
};

const initialState: TTransactionState = {
  getTransactionResponse: undefined,
};

const TransactionReducer = createReducer(initialState, (handleAction) => [
  handleAction(getTransactionAction.success, getTransactionUpdateState),
]);

export default TransactionReducer;
