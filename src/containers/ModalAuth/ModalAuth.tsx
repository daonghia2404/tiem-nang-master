import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import Modal from '@/components/Modal';
import Carousels from '@/components/Carousels';
import SignInForm from '@/containers/ModalAuth/SignInForm';
import SignUpForm from '@/containers/ModalAuth/SignUpForm';
import ForgotPasswordForm from '@/containers/ModalAuth/ForgotPasswordForm';
import VerifyOtpForm from '@/containers/ModalAuth/VerifyOtpForm';
import ChangePasswordForm from '@/containers/ModalAuth/ChangePasswordForm';
import { TRootState } from '@/redux/reducers';

import { dataCarouselModalAuth } from './ModalAuth.data';
import { TDataStateModalAuth, TModalAuthProps } from './ModalAuth.types.d';
import { EKeyStateModalAuth } from './ModalAuth.enums';
import './ModalAuth.scss';

const ModalAuth: React.FC<TModalAuthProps> = ({ visible, defaultKey, onClose }) => {
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);

  const [stateModalAuth, setStateModalAuth] = useState<{
    key: EKeyStateModalAuth;
    data?: TDataStateModalAuth;
  }>({
    key: EKeyStateModalAuth.SIGN_IN,
  });

  const handleChangeStateModalAuth = (key: EKeyStateModalAuth, data?: any): void => {
    setStateModalAuth({
      ...stateModalAuth,
      key,
      data: data || stateModalAuth.data,
    });
  };

  useEffect(() => {
    if (visible) {
      setStateModalAuth({
        key: defaultKey || EKeyStateModalAuth.SIGN_IN,
      });
    }
  }, [visible, defaultKey]);

  return (
    <Modal className="ModalAuth" width={isMobile ? 512 : 1024} visible={visible} onClose={onClose}>
      <div className="ModalAuth-wrapper">
        <Row>
          {!isMobile && (
            <Col span={12}>
              <div className="ModalAuth-carousel flex flex-col items-center justify-center">
                <Carousels slidesToShow={1} autoplay infinite arrows={false}>
                  {dataCarouselModalAuth.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className="ModalAuth-carousel-item">
                      <div className="ModalAuth-carousel-item-image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="ModalAuth-carousel-item-title">{item.title}</div>
                      <div className="ModalAuth-carousel-item-description">{item.description}</div>
                    </div>
                  ))}
                </Carousels>
              </div>
            </Col>
          )}

          <Col span={24} lg={{ span: 12 }}>
            {stateModalAuth.key === EKeyStateModalAuth.SIGN_IN && (
              <SignInForm
                onClickRegister={(): void => handleChangeStateModalAuth(EKeyStateModalAuth.SIGN_UP)}
                onClickForgotPassword={(): void => handleChangeStateModalAuth(EKeyStateModalAuth.FORGOT_PASSWORD)}
                onActiveAccount={(data): void =>
                  handleChangeStateModalAuth(EKeyStateModalAuth.VERIFY_OTP_REGISTER, data)
                }
                onLoginSuccess={onClose}
              />
            )}
            {stateModalAuth.key === EKeyStateModalAuth.SIGN_UP && (
              <SignUpForm
                onClickLogin={(): void => handleChangeStateModalAuth(EKeyStateModalAuth.SIGN_IN)}
                onRegisterSuccess={(data): void =>
                  handleChangeStateModalAuth(EKeyStateModalAuth.VERIFY_OTP_REGISTER, data)
                }
              />
            )}
            {stateModalAuth.key === EKeyStateModalAuth.FORGOT_PASSWORD && (
              <ForgotPasswordForm
                onAuthForgotSuccess={(data): void =>
                  handleChangeStateModalAuth(EKeyStateModalAuth.VERIFY_OTP_FORGOT, data)
                }
              />
            )}
            {[EKeyStateModalAuth.VERIFY_OTP_FORGOT, EKeyStateModalAuth.VERIFY_OTP_REGISTER].includes(
              stateModalAuth.key,
            ) && (
              <VerifyOtpForm
                data={stateModalAuth.data}
                keyVisible={stateModalAuth.key}
                onVerifyRegisterSuccess={(data): void => handleChangeStateModalAuth(EKeyStateModalAuth.SIGN_IN, data)}
                onVerifyForgotSuccess={(data): void =>
                  handleChangeStateModalAuth(EKeyStateModalAuth.CHANGE_PASSWORD, data)
                }
              />
            )}
            {stateModalAuth.key === EKeyStateModalAuth.CHANGE_PASSWORD && (
              <ChangePasswordForm
                data={stateModalAuth.data}
                onAuthForgotResetSuccess={(): void => handleChangeStateModalAuth(EKeyStateModalAuth.SIGN_IN)}
              />
            )}
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ModalAuth;
