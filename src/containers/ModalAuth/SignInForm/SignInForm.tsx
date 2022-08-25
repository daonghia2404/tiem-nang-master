import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';
import FacebookLogin, { RenderProps } from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import classNames from 'classnames';

import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';
import ImageFacebook from '@/assets/images/image-facebook.png';
import ImageGoogle from '@/assets/images/image-google.png';
import { TRootState } from '@/redux/reducers';
import {
  authLoginAction,
  authLoginFacebookAction,
  authRegisterResendOtpAction,
  EAuthLoginAction,
  EAuthRegisterResendOtpAction,
} from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { TAuthLoginResponse } from '@/services/api';

import { TSignInFormProps } from './SignInForm.types.d';

const SignInForm: React.FC<TSignInFormProps> = ({
  onClickRegister,
  onClickForgotPassword,
  onLoginSuccess,
  onActiveAccount,
}) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const authLoginLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthLoginAction.AUTH_LOGIN]);
  const authRegisterResendOtpLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthRegisterResendOtpAction.AUTH_REGISTER_RESEND_OTP],
  );

  const loginLoading = authLoginLoading || authRegisterResendOtpLoading;

  const handleSubmit = (values: any): void => {
    const body = values;
    dispatch(authLoginAction.request({ body }, handleAuthLoginSuccess));
  };

  const handleResponseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse): void => {
    console.log(response);
    // const body = {
    //   token: '',
    //   token_device: '',
    // };
    // dispatch(authLoginFacebookAction.request({ body }, handleLoginFacebookSuccess));
  };

  const handleLoginFacebookSuccess = (): void => {};

  const handleResponseGoogleSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
    console.log(response);
  };

  const handleResponseGoogleFailed = (response: any): void => {
    console.log('Login Google Error: ', response);
  };

  const handleAuthLoginSuccess = (response: TAuthLoginResponse): void => {
    const isAccountInactive = response.statusCode === EResponseCode.UNAUTHORIZED;

    if (isAccountInactive) {
      const headers = {
        token: response.data?.token || '',
      };
      dispatch(
        authRegisterResendOtpAction.request({ headers }, (): void => {
          showNotification(
            ETypeNotification.INFO,
            'Tài khoản của bạn chưa kích hoạt. Vui lòng kiểm tra mã xác thực tại hòm thư của bạn',
          );
          onActiveAccount?.(response.data);
        }),
      );
    } else {
      showNotification(ETypeNotification.SUCCESS, 'Đăng nhập thành công');
      onLoginSuccess?.();
    }
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="SignInForm">
      <Form form={form} layout="vertical" className="ModalAuth-form" onFinish={handleSubmit}>
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input label="Email" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input type="password" label="Mật khẩu" placeholder="Nhập mật khẩu" />
        </Form.Item>

        <div className="ModalAuth-form-register text-right" style={{ marginTop: '-2.4rem' }}>
          <span onClick={onClickForgotPassword}>Quên mật khẩu</span>
        </div>

        <div className="ModalAuth-form-submit">
          <Button htmlType="submit" title="Đăng nhập" type="primary" loading={loginLoading} />
        </div>

        <div className="ModalAuth-form-another-text">Hoặc</div>

        <div className="ModalAuth-form-socials">
          <FacebookLogin
            appId="471842248090696"
            callback={handleResponseFacebook}
            render={(renderProps: RenderProps): React.ReactElement => (
              <div
                onClick={renderProps.onClick}
                className={classNames('ModalAuth-form-socials-item flex items-center facebook', {
                  disabled: renderProps.isDisabled,
                })}
              >
                <div className="ModalAuth-form-socials-item-icon">
                  <img src={ImageFacebook} alt="" />
                </div>
                <div className="ModalAuth-form-socials-item-label">Đăng nhập với Facebook</div>
              </div>
            )}
          />
          <GoogleLogin
            clientId="524450476556-nj9tafjckki88i8lc32lso5e9lu2r325.apps.googleusercontent.com"
            render={(renderProps): React.ReactElement => (
              <div
                onClick={renderProps.onClick}
                className={classNames('ModalAuth-form-socials-item flex items-center google', {
                  disabled: renderProps.disabled,
                })}
              >
                <div className="ModalAuth-form-socials-item-icon">
                  <img src={ImageGoogle} alt="" />
                </div>
                <div className="ModalAuth-form-socials-item-label">Đăng nhập với Google</div>
              </div>
            )}
            onSuccess={handleResponseGoogleSuccess}
            onFailure={handleResponseGoogleFailed}
            cookiePolicy="single_host_origin"
          />
        </div>

        <div className="ModalAuth-form-register">
          Bạn chưa có tài khoản?
          <span onClick={onClickRegister}>Đăng ký ngay</span>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
