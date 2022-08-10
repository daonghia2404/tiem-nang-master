import React from 'react';
import { Col, Row } from 'antd';

import ImageNotification from '@/assets/images/image-notification.png';
import Empty from '@/components/Empty';

import { TEventsProps } from './Events.types';
import './Events.scss';

const Events: React.FC<TEventsProps> = () => {
  const isEmpty = true;
  return (
    <div className="Events">
      {isEmpty ? (
        <Empty title="Không có dữ liệu lịch sử nhận coin" />
      ) : (
        <Row gutter={[40, 30]}>
          {[1, 2, 3, 4].map((item) => (
            <Col key={item} span={24} md={{ span: 12 }}>
              <div className="Events-item flex items-center">
                <div className="Events-item-image">
                  <img src={ImageNotification} alt="" />
                </div>
                <div className="Events-item-info">
                  <div className="Events-item-info-title">Chia sẻ bạn bè - nhận quà liền tay</div>
                  <div className="Events-item-info-description">Thời gian: từ 20/05/2022 - 30/05/2022</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Events;
