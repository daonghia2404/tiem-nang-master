import React from 'react';
import { Rate as AntdRate } from 'antd';

import { TRateProps } from './Rate.types.d';
import './Rate.scss';

const Rate: React.FC<TRateProps> = ({ value, disabled }) => {
  return (
    <div className="Rate">
      <AntdRate value={value} allowHalf allowClear disabled={disabled} />
    </div>
  );
};

export default Rate;
