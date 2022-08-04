import React from 'react';
import { Avatar as AntdAvatar } from 'antd';

import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';

import { TAvatarProps } from './Avatar.types';
import './Avatar.scss';

const Avatar: React.FC<TAvatarProps> = ({ image }) => {
  return (
    <div className="Avatar">
      <AntdAvatar src={image || ImageAvatarDefault} />
    </div>
  );
};

export default Avatar;
