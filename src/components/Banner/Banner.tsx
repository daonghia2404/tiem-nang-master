import React from 'react';

import { TBannerProps } from './Banner.types.d';
import './Banner.scss';

const Banner: React.FC<TBannerProps> = ({ image, title }) => {
  return (
    <div className="Banner">
      <div className="Banner-bg">
        <img src={image} alt="" />
      </div>

      {title && <div className="Banner-title">{title}</div>}
    </div>
  );
};

export default Banner;
