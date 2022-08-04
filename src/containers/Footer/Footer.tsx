/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Row } from 'antd';
import { Link, useLocation } from '@reach/router';
import classNames from 'classnames';

import ImageQR from '@/assets/images/image-qr.png';
import ImageGooglePlay from '@/assets/images/image-google-play.png';
import ImageAppStore from '@/assets/images/image-app-store.png';
import IconZaloCircle from '@/assets/icons/icon-zalo-circle.svg';
import IconFacebookCircle from '@/assets/icons/icon-facebook-circle.svg';
import IconWechatCircle from '@/assets/icons/icon-wechat-circle.svg';

import { dataFooterMenu } from './Footer.data';
import { TFooterProps } from './Footer.types.d';
import './Footer.scss';
import { Paths } from '@/pages/routers';

const Footer: React.FC<TFooterProps> = () => {
  const { pathname } = useLocation();
  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="container">
          <div className="Footer-top-wrapper">
            <Row gutter={32}>
              <Col span={8}>
                <div className="Footer-col">
                  <Link to={Paths.AboutUs} className="Footer-title vollkorn-font">
                    Về chúng tôi
                  </Link>
                  <div className="Footer-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book
                  </div>
                  <div className="Footer-socials flex">
                    <a href="#" className="Footer-socials-item">
                      <img src={IconZaloCircle} alt="" />
                    </a>
                    <a href="#" className="Footer-socials-item">
                      <img src={IconFacebookCircle} alt="" />
                    </a>
                    <a href="#" className="Footer-socials-item">
                      <img src={IconWechatCircle} alt="" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="Footer-col">
                  <div className="Footer-title vollkorn-font">Tải ứng dụng</div>

                  <Row wrap={false} gutter={12} align="middle">
                    <Col span={10}>
                      <div className="Footer-qr">
                        <img src={ImageQR} alt="" />
                      </div>
                    </Col>
                    <Col span={14}>
                      <Row gutter={[24, 24]}>
                        <Col>
                          <a href="#" className="Footer-btn">
                            <img src={ImageAppStore} alt="" />
                          </a>
                        </Col>
                        <Col>
                          <a href="#" className="Footer-btn">
                            <img src={ImageGooglePlay} alt="" />
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={8}>
                <div className="Footer-col">
                  <div className="Footer-title vollkorn-font">Thông tin liên hệ</div>
                  <ul className="Footer-list">
                    <li className="Footer-list-item Footer-text">
                      <strong>ĐỊA CHỈ:</strong> 498 Nguyễn Lương Bằng, Kiến An, Tp Hải phòng
                    </li>
                    <li className="Footer-list-item Footer-text">
                      <strong>ĐIỆN THOẠI:</strong>{' '}
                      <a className="Footer-text" href="tel: 19001900">
                        19001900
                      </a>
                    </li>
                    <li className="Footer-list-item Footer-text">
                      <strong>EMAIL:</strong>{' '}
                      <a className="Footer-text" href="mailto: admin@admin.com.vn">
                        admin@admin.com.vn
                      </a>
                    </li>
                    <li className="Footer-list-item Footer-text">
                      <strong>THỜI GIAN LÀM VIỆC:</strong> 07:00 - 18:00 Từ thứ 2 - thứ 7
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="Footer-bottom">
        <div className="container">
          <div className="Footer-bottom-wrapper">
            <div className="Footer-menu">
              <Row justify="space-between">
                {dataFooterMenu.map((item) => (
                  <Col key={item.key}>
                    <Link
                      to={item.link}
                      className={classNames('Footer-menu-item Footer-text', {
                        active: item.activePaths.includes(pathname),
                      })}
                    >
                      {item.title}
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
