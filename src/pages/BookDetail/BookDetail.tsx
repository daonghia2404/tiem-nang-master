import React from 'react';
import { Col, Row } from 'antd';

import ImageBook1 from '@/assets/images/image-book-1.png';
import Rate from '@/components/Rate';
import ImageCoin from '@/assets/images/image-coin.svg';
import ImageBook from '@/assets/images/image-book.svg';
import IconList from '@/assets/icons/icon-list.svg';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import BookRate from '@/containers/BookRate';

import './BookDetail.scss';

const BookDetail: React.FC = () => {
  return (
    <div className="BookDetail">
      <div className="container">
        <div className="BookDetail-wrapper">
          <Row gutter={[40, 24]}>
            <Col span={12}>
              <div className="BookDetail-image">
                <img src={ImageBook1} alt="" />
              </div>
            </Col>
            <Col span={12}>
              <div className="BookDetail-info">
                <div className="BookDetail-info-title">Khoa học & đời sống</div>
                <Row justify="space-between" align="middle">
                  <Col>
                    <div className="BookDetail-info-author">William </div>
                  </Col>

                  <Col>
                    <div className="BookDetail-info-rate flex items-center">
                      4.0
                      <Rate value={3.5} disabled />
                    </div>
                  </Col>
                </Row>

                <div className="BookDetail-info-price flex items-center">
                  <img src={ImageCoin} alt="" />
                  <strong>120</strong> BCoin
                  <del>
                    <strong>140</strong> Bcoin
                  </del>
                </div>

                <div className="BookDetail-info-title flex items-center">
                  <img src={ImageBook} alt="" />
                  Về sách & tác giả
                </div>

                <div className="BookDetail-info-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quis in eget et consectetur in mi
                  quis sit. Eu tortor dictum lectus malesuada nisi. Vitae lobortis leo vitae mi dolor elit libero, eu.
                  Ac habitasse enim, rhoncus pellentesque faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Faucibus quis in eget et consectetur in mi quis sit. Eu tortor dictum lectus malesuada nisi.
                  Vitae lobortis leo vitae mi dolor elit libero, eu. Ac habitasse enim, rhoncus pellentesque
                  faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quis in eget et consectetur
                  in mi quis sit. Eu tortor dictum lectus malesuada nisi. Vitae lobortis leo vitae mi dolor elit libero,
                  eu. Ac habitasse{' '}
                </div>
                <div className="BookDetail-info-btn">
                  <Button type="default" title="Thanh toán" />
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div className="BookDetail-card">
                <div className="BookDetail-card-header flex items-center">
                  <img src={IconList} alt="" />
                  Danh sách chương
                </div>

                <div className="BookDetail-card-body">
                  <div className="BookDetail-chapter">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="BookDetail-chapter-item flex items-center justify-between">
                        <div className="BookDetail-chapter-item-title">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quis in eget et consectetur
                          adipiscing elit. Faucibus quis in eget et consectetur in mi quis sit. Eu tortor dictum{' '}
                        </div>
                        <div className="BookDetail-chapter-item-icon">
                          <Icon name={EIconName.Locker} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div className="BookDetail-card">
                <div className="BookDetail-card-header flex items-center">
                  <img src={IconList} alt="" />
                  Đánh giá & nhận xét
                </div>

                <div className="BookDetail-card-body">
                  <BookRate />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
