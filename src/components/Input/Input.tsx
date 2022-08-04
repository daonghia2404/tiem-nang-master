import React, { KeyboardEvent } from 'react';
import classNames from 'classnames';
import { Input as AntdInput } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TInputProps } from '@/components/Input/Input.types';
import { copyText } from '@/utils/functions';

import './Input.scss';

const Input: React.FC<TInputProps> = ({
  className,
  type = 'text',
  size,
  placeholder,
  prefix,
  suffix,
  readOnly,
  copy,
  label,
  value,
  onChange,
  onEnter,
}) => {
  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      onEnter?.();
    }
  };

  const inputProps = {
    size,
    placeholder,
    value,
    prefix,
    suffix: copy ? (
      <div className="Input-copy flex items-center" onClick={(): void => copyText(value || '')}>
        <Icon name={EIconName.Copy} color={EIconColor.ORANGE_PEEL} />
        Copy
      </div>
    ) : (
      suffix
    ),
    readOnly,
    onChange,
    onKeyDown: handleKeydown,
  };

  return (
    <div className={classNames('Input', className, { affix: suffix || prefix })}>
      {label && <div className="Input-label">{label}</div>}
      {type === 'text' && <AntdInput {...inputProps} />}
      {type === 'password' && (
        <AntdInput.Password
          {...inputProps}
          iconRender={(visible): React.ReactElement =>
            visible ? (
              <Icon name={EIconName.Eye} color={EIconColor.ORANGE_PEEL} />
            ) : (
              <Icon name={EIconName.Eye} color={EIconColor.NOBEL} />
            )
          }
        />
      )}
    </div>
  );
};

export default Input;
