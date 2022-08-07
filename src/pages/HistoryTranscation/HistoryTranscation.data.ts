import { ETransactionType } from '@/services/api';

export const dataHistoryTranscationTabs = [
  { label: 'Lịch sử mua sách', value: ETransactionType.BUY_USE_WALLET },
  { label: 'Lịch sử nạp tiền', value: ETransactionType.RECHARGE },
  { label: 'Lịch sử nhận coin', value: ETransactionType.APPELATION_RECEIVED },
];
