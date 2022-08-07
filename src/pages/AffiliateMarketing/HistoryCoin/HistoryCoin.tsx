import React from 'react';
import { Col, Row } from 'antd';

import ImageNotification from '@/assets/images/image-notification.png';
import Empty from '@/components/Empty';

import { THistoryCoinProps } from './HistoryCoin.types';
import './HistoryCoin.scss';

const HistoryCoin: React.FC<THistoryCoinProps> = () => {
  return (
    <div className="HistoryCoin">
      {true ? (
        <Empty title="Không có dữ liệu lịch sử nhận coin" />
      ) : (
        <Row gutter={[40, 30]}>
          {[1, 2, 3, 4].map((item) => (
            <Col key={item} span={12}>
              <div className="HistoryCoin-item flex items-center">
                <div className="HistoryCoin-item-image">
                  <img src={ImageNotification} alt="" />
                </div>
                <div className="HistoryCoin-item-info">
                  <div className="HistoryCoin-item-info-title">Chia sẻ bạn bè - nhận quà liền tay</div>
                  <div className="HistoryCoin-item-info-description">Thời gian: từ 20/05/2022 - 30/05/2022</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HistoryCoin;
