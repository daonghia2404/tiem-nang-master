/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'antd';

import Pagination from '@/components/Pagination';
import { formatISODateToDateTime } from '@/utils/functions';
import Empty from '@/components/Empty';

import { THistoryBooksProps } from './HistoryBooks.types.d';
import './HistoryBooks.scss';

const HistoryBooks: React.FC<THistoryBooksProps> = ({ data = [], page, pageSize, total, onPaginateChange }) => {
  const isEmpty = data.length === 0;

  return (
    <div className="HistoryBooks">
      {isEmpty ? (
        <Empty title="Không có dữ liệu lịch sử mua sách" />
      ) : (
        <Row gutter={[20, 20]}>
          {data.map((item) => (
            <Col key={item._id} span={24} md={{ span: 12 }}>
              <div className="HistoryBooks-item">
                <div className="HistoryBooks-item-header flex">
                  <div className="HistoryBooks-item-image">
                    <img src={item.images?.[0]} alt="" />
                  </div>

                  <div className="HistoryBooks-item-info flex flex-col">
                    <div className="HistoryBooks-item-info-title">{item.name}</div>
                    <div className="HistoryBooks-item-info-description">{item.author?.name}</div>
                    <div className="HistoryBooks-item-info-price">
                      <strong>{item.bcoin} </strong>Bcoin
                    </div>
                  </div>
                </div>

                <div className="HistoryBooks-item-footer flex justify-between items-end">
                  <div className="HistoryBooks-item-footer-text">Mã đơn hàng: {item.order_code}</div>
                  <div className="HistoryBooks-item-footer-text nowrap">
                    {formatISODateToDateTime(item.create_at || '')}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}

      <div className="HistoryBooks-pagination flex justify-end">
        <Pagination page={page} pageSize={pageSize} total={total} onChange={onPaginateChange} />
      </div>
    </div>
  );
};

export default HistoryBooks;
