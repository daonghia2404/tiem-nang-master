/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row } from 'antd';

import { formatISODateToDateTime, formatMoneyVND } from '@/utils/functions';
import Pagination from '@/components/Pagination';
import Empty from '@/components/Empty';

import { THistoryPaymentProps } from './HistoryPayment.types';
import './HistoryPayment.scss';

const HistoryPayment: React.FC<THistoryPaymentProps> = ({ data, page, pageSize, total, onPaginateChange }) => {
  const isEmpty = data.length === 0;

  return (
    <div className="HistoryPayment">
      {isEmpty ? (
        <Empty title="Không có dữ liệu lịch sử nạp tiền" />
      ) : (
        <Row gutter={[20, 20]}>
          {data.map((item) => (
            <Col key={item._id} span={24} md={{ span: 12 }}>
              <div className="HistoryPayment-item">
                <div className="HistoryPayment-item-row flex justify-between items-center">
                  <div className="HistoryPayment-item-row-text">Mã nạp :</div>
                  <div className="HistoryPayment-item-row-text">{item.recharge_code}</div>
                </div>

                <div className="HistoryPayment-item-row flex justify-between items-center">
                  <div className="HistoryPayment-item-row-text">Số tiền nạp :</div>
                  <div className="HistoryPayment-item-row-text hightlight">
                    <strong>{item.bcoin}</strong> Bcoin
                  </div>
                </div>

                <div className="HistoryPayment-item-row flex justify-between items-center">
                  <div className="HistoryPayment-item-row-text" />
                  <div className="HistoryPayment-item-row-text">
                    ( {formatMoneyVND({ amount: item.amount, showSuffix: true })} )
                  </div>
                </div>

                <div className="line" />

                <div className="HistoryPayment-item-row flex justify-between items-center">
                  <div className="HistoryPayment-item-row-text">{item.method}</div>
                  <div className="HistoryPayment-item-row-text gray">{formatISODateToDateTime(item.create_at)}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}

      <div className="HistoryPayment-pagination flex justify-end">
        <Pagination page={page} pageSize={pageSize} total={total} onChange={onPaginateChange} />
      </div>
    </div>
  );
};

export default HistoryPayment;
