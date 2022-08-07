import React from 'react';

import ImageEmpty from '@/assets/images/image-empty.png';

import { TEmptyProps } from './Empty.types.d';
import './Empty.scss';

const Empty: React.FC<TEmptyProps> = ({ title }) => {
  return (
    <div className="Empty">
      <img src={ImageEmpty} alt="" />
      {title && <span>{title}</span>}
    </div>
  );
};

export default Empty;
