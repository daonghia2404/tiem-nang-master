import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';

import { TForgotPasswordFormProps } from './ForgotPasswordForm.types';
import { authForgotAction, EAuthForgotAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { ETypeNotification } from '@/common/enums';
import { TAuthForgotResponse } from '@/services/api';

const ForgotPasswordForm: React.FC<TForgotPasswordFormProps> = ({ onAuthForgotSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const authForgotLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthForgotAction.AUTH_FORGOT]);

  const handleSubmit = (values: any): void => {
    const body = values;
    dispatch(authForgotAction.request({ body }, handleAuthForgotSuccess));
  };

  const handleAuthForgotSuccess = (response: TAuthForgotResponse): void => {
    const { data } = response;
    showNotification(
      ETypeNotification.INFO,
      'Gửi yêu cầu đặt lại mật khẩu thành công. Vui lòng kiểm tra mã xác thực tại hòm thư của bạn',
    );
    onAuthForgotSuccess?.(data);
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="ForgotPasswordForm">
      <Form form={form} layout="vertical" className="ModalAuth-form" onFinish={handleSubmit}>
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <div className="ModalAuth-content text-center">
          <div className="ModalAuth-content-title">Quên mật khẩu</div>
          <div className="ModalAuth-content-description">Vui lòng nhập email đăng ký tài khoản</div>
        </div>

        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input label="Email" placeholder="Nhập email" />
        </Form.Item>

        <div className="ModalAuth-form-submit" style={{ marginTop: 0 }}>
          <Button htmlType="submit" title="Tiếp theo" type="primary" loading={authForgotLoading} />
        </div>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
