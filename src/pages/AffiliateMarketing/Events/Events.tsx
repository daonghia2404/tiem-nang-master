import React from 'react';
import { Col, Row } from 'antd';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';
import Empty from '@/components/Empty';

import { TEventsProps } from './Events.types';
import './Events.scss';

const Events: React.FC<TEventsProps> = () => {
  const handleNavigate = (): void => {
    navigate(Paths.Event('1'));
  };

  return (
    <div className="Events">
      {true ? (
        <Empty title="Không có dữ liệu sự kiện" />
      ) : (
        <Row gutter={[40, 40]}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col key={item} span={24} md={{ span: 12 }}>
              <div className="Events-item" onClick={(): void => handleNavigate()}>
                <div className="Events-item-row flex justify-between items-center">
                  <div className="Events-item-row-text">Tài khoản nhập: </div>
                  <div className="Events-item-row-text">123456 A</div>
                </div>

                <div className="Events-item-row flex justify-between items-center">
                  <div className="Events-item-row-text">Số coin nhận được</div>
                  <div className="Events-item-row-text hightlight">
                    <strong>100</strong> Bcoin
                  </div>
                </div>

                <div className="Events-item-row flex justify-between items-center">
                  <div className="Events-item-row-text" />
                  <div className="Events-item-row-text gray">8:00 - 20/04/2022</div>
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
