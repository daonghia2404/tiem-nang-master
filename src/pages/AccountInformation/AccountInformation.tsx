import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import { Col, Form, Row } from 'antd';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import UploadAvatar from '@/components/UploadAvatar';
import Button from '@/components/Button';
import { TRootState } from '@/redux/reducers';
import {
  changePasswordProfileAction,
  EChangePasswordProfileAction,
  EUpdateProfileAction,
  getProfileAction,
  updateProfileAction,
} from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { Paths } from '@/pages/routers';

import './AccountInformation.scss';

const AccountInformation: React.FC = () => {
  const dispatch = useDispatch();
  const [formInformation] = Form.useForm();
  const [formPassword] = Form.useForm();

  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;
  const updateProfileLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUpdateProfileAction.UPDATE_PROFILE],
  );
  const changePasswordProfileLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EChangePasswordProfileAction.CHANGE_PASSWORD_PROFILE],
  );

  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmitFormInformation = (values: any): void => {
    const body = { ...values, avatar: values.avatar === profileState?.avatar ? undefined : values.avatar };
    dispatch(updateProfileAction.request({ body }, handleUpdateProfileSuccess));
  };

  const handleUpdateProfileSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Cập nhật thông tin cá nhân thành công');
    getProfile();
  };

  const handleSubmitFormPassword = (values: any): void => {
    const body = values;
    dispatch(changePasswordProfileAction.request({ body }, handleChangePasswordProfileSuccess));
  };

  const handleChangePasswordProfileSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu tài khoản thành công');
    setPasswordValue('');
    navigate(Paths.BooksLibrary);
    formPassword.resetFields();
  };

  const getProfile = useCallback(() => {
    dispatch(getProfileAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    formInformation.setFieldsValue({ ...profileState, avatar: profileState?.avatar || undefined });
  }, [profileState, formInformation]);

  return (
    <div className="AccountInformation">
      <div className="AccountInformation-wrapper">
        <Row gutter={[40, 40]}>
          <Col span={24} lg={{ span: 12 }}>
            <div className="AccountInformation-card">
              <div className="AccountInformation-card-header">Thông tin cá nhân</div>
              <div className="AccountInformation-card-body">
                <Form
                  form={formInformation}
                  layout="vertical"
                  className="AccountInformation-card-form"
                  onFinish={handleSubmitFormInformation}
                >
                  <Form.Item className="AccountInformation-card-form-avatar" name="avatar" rules={[]}>
                    <UploadAvatar />
                  </Form.Item>
                  <br />
                  <Form.Item name="name" rules={[validationRules.required()]}>
                    <Input placeholder="Nhập tên đăng nhập" label="Tên đăng nhập" />
                  </Form.Item>

                  <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                    <Input placeholder="Nhập số điện thoại" label="Số điện thoại" />
                  </Form.Item>

                  <div className="AccountInformation-form-submit">
                    <Button title="Chỉnh sửa" htmlType="submit" loading={updateProfileLoading} />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col span={24} lg={{ span: 12 }}>
            <div className="AccountInformation-card">
              <div className="AccountInformation-card-header">Đổi mật khẩu</div>
              <div className="AccountInformation-card-body">
                <Form
                  form={formPassword}
                  layout="vertical"
                  className="AccountInformation-card-form"
                  onFinish={handleSubmitFormPassword}
                >
                  <Form.Item name="password" rules={[validationRules.required()]}>
                    <Input type="password" placeholder="Nhập mật khẩu hiện tại" label="Mật khẩu hiện tại" />
                  </Form.Item>

                  <Form.Item name="newPassword" rules={[validationRules.required()]}>
                    <Input
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      label="Mật khẩu mới"
                      onChange={(e): void => setPasswordValue(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    name="confirmNewPassword"
                    rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
                  >
                    <Input type="password" placeholder="Nhập lại mật khẩu mới" label="Xác nhận mật khẩu mới" />
                  </Form.Item>

                  <div className="AccountInformation-form-submit">
                    <Button title="Hoàn thành" htmlType="submit" loading={changePasswordProfileLoading} />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AccountInformation;
