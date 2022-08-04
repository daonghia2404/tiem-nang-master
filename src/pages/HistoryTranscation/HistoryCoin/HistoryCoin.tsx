import React from 'react';
import { Col, Row } from 'antd';

import { THistoryCoinProps } from './HistoryCoin.types';
import './HistoryCoin.scss';

const HistoryCoin: React.FC<THistoryCoinProps> = () => {
  return (
    <div className="HistoryCoin">
      <Row gutter={[40, 40]}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Col key={item} span={12}>
            <div className="HistoryCoin-item">
              <div className="HistoryCoin-item-row flex justify-between items-center">
                <div className="HistoryCoin-item-row-text">Mã nhận :</div>
                <div className="HistoryCoin-item-row-text">123456 A</div>
              </div>

              <div className="HistoryCoin-item-row flex justify-between items-center">
                <div className="HistoryCoin-item-row-text small">Số Bcoin đã nhận:</div>
                <div className="HistoryCoin-item-row-text hightlight">
                  <strong>100</strong> Bcoin
                </div>
              </div>

              <div className="HistoryCoin-item-row flex justify-between items-center">
                <div className="HistoryCoin-item-row-text" />
                <div className="HistoryCoin-item-row-text">( 100.000 đ )</div>
              </div>

              <div className="line" />

              <div className="HistoryCoin-item-row flex justify-between items-center">
                <div className="HistoryCoin-item-row-text">Đọc sách 20 sách</div>
                <div className="HistoryCoin-item-row-text gray">8:00 - 20/04/2022</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HistoryCoin;
