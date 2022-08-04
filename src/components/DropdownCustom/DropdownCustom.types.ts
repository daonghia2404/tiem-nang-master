import React from 'react';

export type TDropdownCustomProps = {
  className?: string;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  overlay: React.ReactElement;
  arrow?: boolean;
  visible?: boolean;
  placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'top' | 'bottom';
  overlayClassName?: string;
  onVisibleChange?: (visible: boolean) => void;
};
