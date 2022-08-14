import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';

import { EKeyStateModalAuth } from '@/containers/ModalAuth/ModalAuth.enums';
import Passcode from '@/components/Passcode';
import {
  authForgotResendOtpAction,
  authForgotVerifyAction,
  authRegisterResendOtpAction,
  authVerifyAction,
  EAuthForgotResendOtpAction,
  EAuthRegisterResendOtpAction,
} from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import Loading from '@/components/Loading';

import { TVerifyOtpFormProps } from './VerifyOtpForm.types';

const VerifyOtpForm: React.FC<TVerifyOtpFormProps> = ({
  keyVisible,
  data,
  onVerifyRegisterSuccess,
  onVerifyForgotSuccess,
}) => {
  const dispatch = useDispatch();
  const isVerifyRegister = keyVisible === EKeyStateModalAuth.VERIFY_OTP_REGISTER;

  const [passcode, setPasscode] = useState<string>('');

  const authRegisterResendOtpLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP],
  );
  const authForgotResendOtpLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthForgotResendOtpAction.AUTH_FORGOT_RESEND_OTP],
  );

  const resendLoading = authRegisterResendOtpLoading || authForgotResendOtpLoading;

  const handleSubmit = (): void => {
    const headers = {
      token: data?.token || '',
    };
    const body = {
      otp: passcode,
    };
    if (isVerifyRegister) {
      dispatch(authVerifyAction.request({ body, headers }, handleVerifySuccess));
    } else {
      dispatch(authForgotVerifyAction.request({ body, headers }, handleVerifySuccess));
    }
  };

  const handleVerifySuccess = (response: { data: { token: string } }): void => {
    const { data: dataResponse } = response;
    showNotification(ETypeNotification.SUCCESS, 'Xác thực mã thành công');
    if (isVerifyRegister) {
      onVerifyRegisterSuccess?.(dataResponse);
    } else {
      onVerifyForgotSuccess?.(dataResponse);
    }
  };

  const handleResendOtp = (): void => {
    const headers = {
      token: data?.token || '',
    };
    if (isVerifyRegister) {
      dispatch(authRegisterResendOtpAction.request({ headers }, handleResendOtpSuccess));
    } else {
      dispatch(authForgotResendOtpAction.request({ headers }, handleResendOtpSuccess));
    }
  };

  const handleResendOtpSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Gửi lại mã xác thực OTP thành công');
  };

  return (
    <div className="VerifyOtpForm">
      <div className="ModalAuth-form">
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <div className="ModalAuth-content text-center">
          <div className="ModalAuth-content-title">Xác thực tài khoản</div>
          <div className="ModalAuth-content-description">Vui lòng nhập mã OTP được gửi đến email</div>
        </div>

        <Passcode onChange={setPasscode} onSubmit={setPasscode} />

        <div className="ModalAuth-form-submit" style={{ margin: '4rem 0 1.6rem' }}>
          <Button title="Xác nhận" type="primary" onClick={handleSubmit} />
        </div>

        <div
          className={classNames('ModalAuth-form-register flex items-center justify-center', {
            disabled: resendLoading,
          })}
        >
          Không nhận được mã?
          <span onClick={handleResendOtp} style={{ paddingRight: 12 }}>
            Gửi lại
          </span>
          {resendLoading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
