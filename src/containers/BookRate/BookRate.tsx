import React, { useState } from 'react';
import { Row, Col } from 'antd';

import Rate from '@/components/Rate';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import BookRateForm from '@/containers/BookRate/BookRateForm';

import { TBookRateProps } from './BookRate.types.d';
import './BookRate.scss';

const BookRate: React.FC<TBookRateProps> = () => {
  const [visibleBookRateFormModal, setVisibleBookRateFormModal] = useState<boolean>(false);

  const handleOpenBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(true);
  };

  const handleCloseBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(false);
  };

  return (
    <div className="BookRate">
      <div className="BookRate-rate">
        <Row>
          <Col span={6}>
            <div className="BookRate-rate-total flex flex-col items-center justify-center">
              <span className="BookRate-rate-total-label">4.0</span>
              <Rate value={4} disabled />
            </div>
          </Col>
          <Col span={12}>
            <div className="BookRate-rate-detail">
              <div className="BookRate-rate-detail-item">
                <div className="BookRate-rate-detail-item-label flex justify-between">
                  <span>Giọng đọc</span>
                  <span>3.5</span>
                </div>
                <div className="BookRate-rate-detail-item-progress">
                  <div className="BookRate-rate-detail-item-progress-line" style={{ width: '60%' }} />
                </div>
              </div>

              <div className="BookRate-rate-detail-item">
                <div className="BookRate-rate-detail-item-label flex justify-between">
                  <span>Nội dung</span>
                  <span>4.5</span>
                </div>
                <div className="BookRate-rate-detail-item-progress">
                  <div className="BookRate-rate-detail-item-progress-line" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="BookRate-rate-btn flex items-center justify-center">
              <Button title="Viết cảm nhận" onClick={handleOpenBookRateFormModal} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="BookRate-comments">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="BookRate-comments-item flex items-start">
            <div className="BookRate-comments-item-avatar">
              <Avatar />
            </div>
            <div className="BookRate-comments-item-info">
              <div className="BookRate-comments-item-info-name flex items-center">
                Luminer
                <div className="BookRate-comments-item-info-date">10/10/2021</div>
                <div className="BookRate-comments-item-info-rate">
                  <Rate disabled value={5} />
                </div>
              </div>

              <div className="BookRate-comments-item-info-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet et ornare cum pellentesque. Mattis ut
                consectetur ut ut. Pretium vitae massa viverra arcu amet eu penatibus ullamcorper. Sed diam donec mauris
                morbi ut. Amet dolor ipsum risus varius dui suspendisse.
              </div>
            </div>
          </div>
        ))}
      </div>

      <BookRateForm visible={visibleBookRateFormModal} onClose={handleCloseBookRateFormModal} />
    </div>
  );
};

export default BookRate;
