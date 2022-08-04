import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TUploadAvatarProps } from './UploadAvatar.types.d';
import './UploadAvatar.scss';

const UploadAvatar: React.FC<TUploadAvatarProps> = () => {
  return (
    <div className="UploadAvatar">
      <div className="UploadAvatar-preview" />
      <div className="UploadAvatar-overlay flex items-center justify-center">
        <Icon name={EIconName.Camera} color={EIconColor.WHITE} />
        Chỉnh sửa
      </div>
    </div>
  );
};

export default UploadAvatar;
