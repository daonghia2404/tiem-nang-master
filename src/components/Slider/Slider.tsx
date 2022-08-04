import React from 'react';
import { Slider as AntdSlider } from 'antd';
import classNames from 'classnames';

import { TSliderProps } from './Slider.types.d';
import './Slider.scss';

const Slider: React.FC<TSliderProps> = ({
  label,
  defaultValue,
  value,
  onChange,
  bordered,
  step,
  min,
  max,
  showValue,
  marks,
}) => {
  return (
    <div className={classNames('Slider', { bordered })}>
      {label && <div className="Slider-label">{label}</div>}
      {showValue && <div className="Slider-value">{value}</div>}
      <AntdSlider
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        step={step}
        min={min}
        max={max}
        tooltipVisible={false}
        marks={marks}
      />
    </div>
  );
};

export default Slider;
