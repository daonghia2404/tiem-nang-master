/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'antd';

import { formatISODateToDateTime } from '@/utils/functions';
import Pagination from '@/components/Pagination';
import Empty from '@/components/Empty';

import { THistoryCoinProps } from './HistoryCoin.types';
import './HistoryCoin.scss';

const HistoryCoin: React.FC<THistoryCoinProps> = ({ data = [], page, pageSize, total, onPaginateChange }) => {
  const isEmpty = data?.length === 0;

  return (
    <div className="HistoryCoin">
      {isEmpty ? (
        <Empty title="Không có dữ liệu lịch sử nhận coin" />
      ) : (
        <Row gutter={[20, 20]}>
          {data.map((item) => (
            <Col key={item._id} span={24} md={{ span: 12 }}>
              <div className="HistoryCoin-item">
                <div className="HistoryCoin-item-row flex justify-between items-center">
                  <div className="HistoryCoin-item-row-text">Mã nhận :</div>
                  <div className="HistoryCoin-item-row-text">{item.trans_code}</div>
                </div>

                <div className="HistoryCoin-item-row flex justify-between items-center">
                  <div className="HistoryCoin-item-row-text small">Số Bcoin đã nhận:</div>
                  <div className="HistoryCoin-item-row-text hightlight">
                    <strong>{item.bcoin_received}</strong> Bcoin
                  </div>
                </div>

                <div className="HistoryCoin-item-row flex justify-between items-center">
                  <div className="HistoryCoin-item-row-text small">{item.note}</div>
                </div>

                <div className="line" />

                <div className="HistoryCoin-item-row flex justify-between items-center">
                  <div className="HistoryCoin-item-row-text">{item.method}</div>
                  <div className="HistoryCoin-item-row-text gray">{formatISODateToDateTime(item.create_at)}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}

      <div className="HistoryCoin-pagination flex justify-end">
        <Pagination page={page} pageSize={pageSize} total={total} onChange={onPaginateChange} />
      </div>
    </div>
  );
};

export default HistoryCoin;
