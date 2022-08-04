import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';

import { TSignUpFormProps } from './SignUpForm.types.d';
import { authRegisterAction, EAuthRegisterAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TAuthRegisterResponse } from '@/services/api';
import { ETypeNotification } from '@/common/enums';

const SignUpForm: React.FC<TSignUpFormProps> = ({ onClickLogin, onRegisterSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState('');

  const authRegisterLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthRegisterAction.AUTH_REGISTER],
  );

  const handleSubmit = (values: any): void => {
    dispatch(authRegisterAction.request({ body: values }, handleAuthRegisterSuccess));
  };

  const handleAuthRegisterSuccess = (response: TAuthRegisterResponse): void => {
    showNotification(
      ETypeNotification.INFO,
      'Đăng ký tài khoản thành công. Vui lòng kiểm tra mã xác thực tại hòm thư của bạn',
    );
    const { data } = response;
    onRegisterSuccess?.(data);
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="SignUpForm">
      <Form form={form} layout="vertical" className="ModalAuth-form" onFinish={handleSubmit}>
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <Form.Item name="name" rules={[validationRules.required()]}>
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập" />
        </Form.Item>
        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input label="Email" placeholder="Nhập email" />
        </Form.Item>
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
        <Form.Item name="referrer" rules={[]}>
          <Input label="Mã giới thiệu" placeholder="Nhập mã giới thiệu" />
        </Form.Item>

        <div className="ModalAuth-form-submit">
          <Button htmlType="submit" title="Đăng ký" type="primary" loading={authRegisterLoading} />
        </div>

        <div className="ModalAuth-form-register">
          Bạn đã có tài khoản?
          <span onClick={onClickLogin}>Đăng nhập</span>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
