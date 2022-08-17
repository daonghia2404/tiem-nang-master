import { TProductFile } from '@/common/models';

export type TTabDocumentProps = {
  source?: TProductFile;
  onClickDocument?: (data: TProductFile) => void;
  onBuyBook?: () => void;
};
