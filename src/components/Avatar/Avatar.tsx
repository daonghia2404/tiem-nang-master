import React, { useState } from 'react';
import { Avatar as AntdAvatar } from 'antd';

import ImageAvatarDefault from '@/assets/images/image-avatar-default.svg';

import { TAvatarProps } from './Avatar.types';
import './Avatar.scss';

const Avatar: React.FC<TAvatarProps> = ({ image }) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="Avatar">
      <AntdAvatar
        src={isError ? ImageAvatarDefault : image || ImageAvatarDefault}
        onError={(): boolean => {
          setIsError(true);
          return true;
        }}
      />
    </div>
  );
};

export default Avatar;
