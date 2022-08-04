import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';
import { TRootState } from '@/redux/reducers';
import { authForgotResetAction, EAuthForgotResetAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import { TChangePasswordFormProps } from './ChangePasswordForm.types';

const ChangePasswordForm: React.FC<TChangePasswordFormProps> = ({ data, onAuthForgotResetSuccess }) => {
  const [form] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();

  const authForgotResetLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthForgotResetAction.AUTH_FORGOT_RESET],
  );

  const handleSubmit = (values: any): void => {
    const headers = {
      token: data?.token || '',
    };
    const body = {
      password: values.password,
      newPassword: values.password,
    };
    dispatch(authForgotResetAction.request({ body, headers }, handleAuthForgotResetSuccess));
  };

  const handleAuthForgotResetSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu tài khoản thành công');
    onAuthForgotResetSuccess?.();
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="ChangePasswordForm">
      <Form form={form} layout="vertical" className="ModalAuth-form" onFinish={handleSubmit}>
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <div className="ModalAuth-content text-center">
          <div className="ModalAuth-content-title">Đổi mật khẩu</div>
          <div className="ModalAuth-content-description">Nhập mật khẩu mới để đăng nhập tài khoản</div>
        </div>

        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input
            type="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            onChange={(e): void => {
              setPasswordValue(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
        >
          <Input type="password" label="Nhập lại mật khẩu" placeholder="Nhập mật khẩu" />
        </Form.Item>

        <div className="ModalAuth-form-submit">
          <Button htmlType="submit" title="Hoàn thành" type="primary" loading={authForgotResetLoading} />
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
