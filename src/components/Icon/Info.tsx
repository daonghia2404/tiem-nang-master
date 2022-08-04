import React from 'react';

import { TIconProps } from '@/components/Icon/Icon.types';
import { EIconColor } from '@/components/Icon/Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 0C2.68624 0 0 2.68634 0 6C0 9.31385 2.68624 12 6 12C9.31376 12 12 9.31385 12 6C12 2.68634 9.31376 0 6 0ZM6 3C6.41423 3 6.75 3.33581 6.75 3.75C6.75 4.16437 6.41423 4.5 6 4.5C5.58577 4.5 5.25 4.16437 5.25 3.75C5.25 3.33581 5.58577 3 6 3ZM7.125 9H4.875C4.66791 9 4.5 8.83228 4.5 8.625C4.5 8.41791 4.66791 8.25 4.875 8.25H5.25V6H4.875C4.66791 6 4.5 5.83228 4.5 5.625C4.5 5.41791 4.66791 5.25 4.875 5.25H6.375C6.58209 5.25 6.75 5.41791 6.75 5.625V8.25H7.125C7.33209 8.25 7.5 8.41791 7.5 8.625C7.5 8.83228 7.33209 9 7.125 9Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
