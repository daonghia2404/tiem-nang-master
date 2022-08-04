import React from 'react';

import ImageNotification from '@/assets/images/image-notification.png';
import ImageCoin from '@/assets/images/image-coin.svg';

import './Event.scss';

const Event: React.FC = () => {
  return (
    <div className="Event">
      <div className="container">
        <div className="Event-wrapper">
          <div className="Event-badge flex items-center justify-between error">
            <span>Đã hết hạn</span>
            <span>Đã tham gia</span>
          </div>

          <div className="Event-image">
            <img src={ImageNotification} alt="" />
          </div>

          <div className="Event-title">Sự kiện: Chia sẻ bạn bè - nhận quà liền tay</div>
          <div className="Event-description">
            Chia sẻ mã giới thiệu cho 5 bạn bè đăng ký tài khoản thành công. bạn sẽ nhận được 10 Vcoin
          </div>
          <br />
          <div className="Event-description">
            <strong>Thời gian:</strong>
            từ 20/05/2022 - 30/05/2022
          </div>
          <br />
          <div className="Event-description">
            <strong>Tiến độ:</strong>
            Đã mời 10/15 bạn bè
          </div>
          <br />

          <div className="Event-claim-btn flex items-center justify-center">
            Thưởng
            <img src={ImageCoin} alt="" />
            <strong>
              100 <small>Bcoin</small>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
