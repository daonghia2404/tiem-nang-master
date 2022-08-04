import React from 'react';

import ImageNotification from '@/assets/images/image-notification.png';

import './NotificationDetail.scss';
import Button from '@/components/Button';

const NotificationDetail: React.FC = () => {
  return (
    <div className="NotificationDetail">
      <div className="container">
        <div className="NotificationDetail-wrapper">
          <div className="NotificationDetail-header">
            <div className="NotificationDetail-title">Chia sẻ bạn bè - nhận quà liền tay</div>
            <div className="NotificationDetail-date">20/4/2022</div>
            <div className="NotificationDetail-description">
              Hoàng Huy đã đăng ký tài khoản với mã giới thiệu của bạn - <span>Tiến độ 1/15</span>
            </div>
          </div>

          <div className="NotificationDetail-content style-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum a, morbi gravida viverra adipiscing.
              Gravida feugiat in nibh ultrices neque enim in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Dictum a, morbi gravida viverra adipiscing. Gravida feugiat in nibh ultrices neque enim in.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum a, morbi gravida viverra adipiscing.
              Gravida feugiat in nibh ultrices neque enim in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Dictum a, morbi gravida viverra adipiscing. Gravida feugiat in nibh ultrices neque enim in.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Dictum a, morbi gravida viverra adipiscing. Gravida feugiat
              in nibh ultrices neque enim in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum a, morbi
              gravida viverra adipiscing. Gravida feugiat in nibh ultrices neque enim in.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Dictum a, morbi gravida viverra adipiscing. Gravida feugiat in nibh ultrices
              neque enim in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum a, morbi gravida viverra
              adipiscing. Gravida feugiat in nibh ultrices neque enim in.
            </p>
            <img src={ImageNotification} alt="" />
          </div>

          <div className="NotificationDetail-btn flex justify-center">
            <Button title="Xem sự kiện" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
