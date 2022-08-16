import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// ENUMS
export enum ETransactionType {
  RECHARGE = 'RECHARGE',
  PAYMENT_FOR_CLASS = 'PAYMENT_FOR_CLASS',
  BUY_USE_CARD = 'BUY_USE_CARD',
  BUY_USE_WALLET = 'BUY_USE_WALLET',
  AFFILIATE = 'AFFILIATE',
  APPELATION_RECEIVED = 'APPELATION_RECEIVED',
}

// TYPES

export type TGetTransactionParams = {
  page: number;
  pageSize: number;
  type: ETransactionType;
};

export type TGetTransactionMaterials = {
  params?: TGetTransactionParams;
};

export type TGetTransactionResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: any;
  };
};

export type TPayment = {
  amount: number;
  bcoin: number;
  create_at: string;
  create_by: string;
  is_deleted: boolean;
  method: string;
  recharge_code: string;
  bcoin_received: number;
  note: string;
  read_books: number;
  trans_code: string;
  _id: string;
};

// FUNCTION

export const getTransaction = async ({ params }: TGetTransactionMaterials): Promise<TGetTransactionResponse> => {
  const response = await ApiService.get(`/transaction`, { params });
  return response.data;
};
