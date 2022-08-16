import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import classNames from 'classnames';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

import { EFormat } from '@/common/enums';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TDatePickerProps } from './DatePicker.types';
import './DatePicker.scss';

const DatePicker: React.FC<TDatePickerProps> = ({
  className,
  value,
  placeholder,
  disabled,
  label,
  disabledDate,
  onChange,
}) => {
  return (
    <div className={classNames('DatePicker', className)}>
      {label && <div className="DatePicker-label">{label}</div>}

      <AntdDatePicker
        locale={locale}
        format={EFormat.DATE}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        disabledDate={disabledDate}
        suffixIcon={<Icon name={EIconName.Calendar} color={EIconColor.SILVER} />}
      />
    </div>
  );
};

export default DatePicker;
