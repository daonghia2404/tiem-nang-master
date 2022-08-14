import React, { useEffect, useState } from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.svg';

import Upload from '@/components/Upload/Upload';
import { handleErrorImageUrl } from '@/utils/functions';

import { regex } from '@/common/constants';
import { TUploadAvatarProps } from './UploadAvatar.types.d';
import './UploadAvatar.scss';

const UploadAvatar: React.FC<TUploadAvatarProps> = ({ value, onChange }) => {
  const [previewImage, setPreviewImage] = useState('');

  const handleUploadChange = ({ fileId, fullUrl }: { fileId: string; fullUrl: string }): void => {
    onChange?.(fileId);
    setPreviewImage(fullUrl);
  };

  useEffect(() => {
    if (value && regex.url.test(value)) setPreviewImage(value);
  }, [value]);

  return (
    <div className="UploadAvatar">
      <Upload accept=".jpg, .jpeg, .png, .svg" onChange={handleUploadChange}>
        <div className="UploadAvatar-preview">
          <img src={previewImage || ImageAvatarDefault} alt="" onError={handleErrorImageUrl} />
        </div>

        <div className="UploadAvatar-overlay flex items-center justify-center">
          <Icon name={EIconName.Camera} color={EIconColor.WHITE} />
          Chỉnh sửa
        </div>
      </Upload>
    </div>
  );
};

export default UploadAvatar;
