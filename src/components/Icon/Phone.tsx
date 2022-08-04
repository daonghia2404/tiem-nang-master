import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2160_30176)">
        <path
          d="M15.5653 11.7424L13.3325 9.50954C12.535 8.71209 11.1794 9.0311 10.8604 10.0678C10.6211 10.7855 9.82369 11.1842 9.10599 11.0247C7.5111 10.626 5.358 8.5526 4.95927 6.87797C4.72004 6.16024 5.19851 5.36279 5.91621 5.12359C6.95289 4.80461 7.27187 3.44895 6.47442 2.65151L4.24157 0.418659C3.60362 -0.139553 2.64668 -0.139553 2.08847 0.418659L0.573324 1.93381C-0.941823 3.5287 0.732813 7.75516 4.48081 11.5032C8.2288 15.2511 12.4553 17.0056 14.0502 15.4106L15.5653 13.8955C16.1235 13.2575 16.1235 12.3006 15.5653 11.7424Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2160_30176">
          <rect width="16" height="16" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
