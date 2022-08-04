import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.31741 5.99571L7.80785 10.4862C7.93067 10.6094 7.99964 10.7764 7.99964 10.9504C7.99964 11.1244 7.93067 11.2914 7.80785 11.4147L7.41431 11.8082C7.29101 11.931 7.12408 12 6.95005 12C6.77602 12 6.60908 11.931 6.48579 11.8082L1.13897 6.4614C1.01735 6.33748 0.949219 6.17078 0.949219 5.99714C0.949219 5.82351 1.01735 5.65681 1.13897 5.53289L6.48079 0.191782C6.60408 0.0689607 6.77102 5.08958e-07 6.94505 5.24172e-07C7.11907 5.39386e-07 7.28601 0.0689607 7.4093 0.191782L7.80285 0.58533C7.92585 0.708529 7.99493 0.875501 7.99493 1.04959C7.99493 1.22367 7.92585 1.39065 7.80285 1.51385L3.31741 5.99571Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
