import React, { useRef } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { EUploadAction, uploadAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TUploadResponse } from '@/services/api';

import { TUploadProps } from './Upload.types';
import './Upload.scss';

const Upload: React.FC<TUploadProps> = ({ className, accept, multiple, children, disabled, onChange }) => {
  const dispatch = useDispatch();
  const inputFilesRef = useRef<HTMLInputElement>(null);

  const uploadLoading = useSelector((state: TRootState) => state.loadingReducer[EUploadAction.UPLOAD]);
  const disabledUpload = disabled || uploadLoading;

  const handleClickUpload = (): void => {
    if (!disabledUpload) inputFilesRef?.current?.click();
  };

  const handleChangeUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    if (files) {
      const filesArray = Array.from(files);
      const formData = new FormData();
      filesArray.forEach((item) => {
        formData.append('file', item);
      });
      dispatch(uploadAction.request({ body: formData }, handleUploadSuccess));
    }
  };

  const handleUploadSuccess = (response: TUploadResponse): void => {
    if (inputFilesRef.current) inputFilesRef.current.value = '';
    onChange?.(response.data);
  };

  return (
    <div className={classNames('Upload', { disabled: disabledUpload }, className)}>
      <div className="Upload-wrapper" onClick={handleClickUpload}>
        {children}
      </div>
      <input
        ref={inputFilesRef}
        className="Upload-input"
        accept={accept}
        type="file"
        multiple={multiple}
        onChange={handleChangeUpload}
      />
    </div>
  );
};

export default Upload;
