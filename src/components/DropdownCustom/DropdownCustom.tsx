import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import { TDropdownCustomProps } from './DropdownCustom.types';
import './DropdownCustom.scss';

const DropdownCustom: React.FC<TDropdownCustomProps> = ({
  visible,
  overlay,
  children,
  arrow,
  trigger,
  placement,
  overlayClassName,
  onVisibleChange,
}) => {
  const handleVisibleChange = (currentVisible: boolean): void => {
    onVisibleChange?.(currentVisible);
  };

  const antdDropdownProps = {
    visible,
    overlay,
    arrow,
    placement,
    overlayClassName: classNames('DropdownCustom-overlay', overlayClassName),
    trigger: trigger || ['click'],
    onVisibleChange: handleVisibleChange,
  };

  return (
    <div className="DropdownCustom">
      <AntdDropdown {...antdDropdownProps}>
        <div className="DropdownCustom-body">{children}</div>
      </AntdDropdown>
    </div>
  );
};

export default DropdownCustom;
