import React from 'react';

import ImageFeatureCommingSoon from '@/assets/images/image-feature-comming-soon.png';

import { TFeatureCommingSoonProps } from './FeatureCommingSoon.types.d';
import './FeatureCommingSoon.scss';

const FeatureCommingSoon: React.FC<TFeatureCommingSoonProps> = () => {
  return (
    <div className="FeatureCommingSoon">
      <img src={ImageFeatureCommingSoon} alt="" />
      <span>Chức năng này đang được phát triển</span>
    </div>
  );
};

export default FeatureCommingSoon;
