import React from 'react';
import { Col, Row } from 'antd';

import ImageBook1 from '@/assets/images/image-book-1.png';

import { THistoryBooksProps } from './HistoryBooks.types.d';
import './HistoryBooks.scss';

const HistoryBooks: React.FC<THistoryBooksProps> = () => {
  return (
    <div className="HistoryBooks">
      <Row gutter={[40, 40]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Col key={item} span={12}>
            <div className="HistoryBooks-item">
              <div className="HistoryBooks-item-header flex">
                <div className="HistoryBooks-item-image">
                  <img src={ImageBook1} alt="" />
                </div>

                <div className="HistoryBooks-item-info flex flex-col">
                  <div className="HistoryBooks-item-info-title">Khoa học & đời sống</div>
                  <div className="HistoryBooks-item-info-description">William</div>
                  <div className="HistoryBooks-item-info-price">
                    <strong>120.000 </strong>Bcoin
                  </div>
                </div>
              </div>

              <div className="HistoryBooks-item-footer flex justify-between">
                <div className="HistoryBooks-item-footer-text">Mã đơn hàng: 1234A</div>
                <div className="HistoryBooks-item-footer-text">8:00 - 20/04/2022</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HistoryBooks;
