import { TSelectOption } from '@/components/Select';

export type TBackgroundFormProps = {
  options: TSelectOption[];
  value?: TSelectOption;
  label?: string;
  onChange?: (data: TSelectOption) => void;
};
