import React from 'react';
import { Col, Row } from 'antd';

import { THistoryPaymentProps } from './HistoryPayment.types';
import './HistoryPayment.scss';

const HistoryPayment: React.FC<THistoryPaymentProps> = () => {
  return (
    <div className="HistoryPayment">
      <Row gutter={[40, 40]}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Col key={item} span={12}>
            <div className="HistoryPayment-item">
              <div className="HistoryPayment-item-row flex justify-between items-center">
                <div className="HistoryPayment-item-row-text">Mã nạp :</div>
                <div className="HistoryPayment-item-row-text">123456 A</div>
              </div>

              <div className="HistoryPayment-item-row flex justify-between items-center">
                <div className="HistoryPayment-item-row-text">Số tiền nạp :</div>
                <div className="HistoryPayment-item-row-text hightlight">
                  <strong>100</strong> Bcoin
                </div>
              </div>

              <div className="HistoryPayment-item-row flex justify-between items-center">
                <div className="HistoryPayment-item-row-text" />
                <div className="HistoryPayment-item-row-text">( 100.000 đ )</div>
              </div>

              <div className="line" />

              <div className="HistoryPayment-item-row flex justify-between items-center">
                <div className="HistoryPayment-item-row-text">VNpay</div>
                <div className="HistoryPayment-item-row-text gray">8:00 - 20/04/2022</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HistoryPayment;
