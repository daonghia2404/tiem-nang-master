import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import classNames from 'classnames';

import { TPaginationProps } from '@/components/Pagination/Pagination.types';

import './Pagination.scss';
import Icon, { EIconName } from '@/components/Icon';
import { getTotalPage } from '@/utils/functions';

const Pagination: React.FC<TPaginationProps> = ({ page, pageSize, total = 0, className, onChange }) => {
  const itemRender = (
    _: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    element: React.ReactNode,
  ): React.ReactNode => {
    switch (type) {
      case 'prev':
        return <Icon name={EIconName.AngleLeft} />;
      case 'next':
        return <Icon name={EIconName.AngleRight} />;
      default:
        return element;
    }
  };
  return (
    <div className={classNames('Pagination', className)}>
      <AntdPagination
        current={page}
        pageSize={pageSize}
        total={total}
        hideOnSinglePage
        showLessItems
        showTotal={(): string => `Trang ${page} / ${getTotalPage(total, pageSize)}`}
        showQuickJumper={false}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
