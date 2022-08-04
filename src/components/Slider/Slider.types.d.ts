import { SliderMarks } from 'antd/lib/slider';

export type TSliderProps = {
  label?: string;
  value?: number;
  step?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  showValue?: boolean;
  marks?: SliderMarks;
  bordered?: boolean;
  onChange?: (value: number) => void;
};
