import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.1267 17.7688C11.974 17.9171 11.7656 18 11.5491 18C11.3327 18 11.1243 17.9171 10.9716 17.7688L6.35905 13.3128C5.88032 12.8504 5.88032 12.1008 6.35905 11.6392L6.93664 11.0813C7.41537 10.6189 8.19066 10.6189 8.66939 11.0813L11.5491 13.8628L19.3306 6.3468C19.8093 5.8844 20.5854 5.8844 21.0634 6.3468L21.6409 6.90469C22.1197 7.36709 22.1197 8.11672 21.6409 8.57833L12.1267 17.7688Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
