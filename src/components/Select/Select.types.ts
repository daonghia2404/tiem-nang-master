import React from 'react';

export type TSelectProps = {
  className?: string;
  placeholder?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  showSearch?: boolean;
  disabled?: boolean;
  defaultValue?: TSelectOption;
  allowClear?: boolean;
  dropdownClassName?: string;
  label?: string;
  onSearch?: (keyword: string) => void;
  paginate?: {
    page: number;
    pageSize: number;
    total: number;
  };
  onLoadMore?: () => void;
  onChange?: (option: TSelectOption | null) => void;
};

export type TSelectOption = {
  label: string | React.ReactNode;
  value: string;
  data?: any;
  disabled?: boolean;
};
