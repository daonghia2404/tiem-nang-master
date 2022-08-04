import React, { useState } from 'react';

import { Col, Form, Row } from 'antd';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import UploadAvatar from '@/components/UploadAvatar';
import Button from '@/components/Button';

import './AccountInformation.scss';

const AccountInformation: React.FC = () => {
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <div className="AccountInformation">
      <div className="AccountInformation-wrapper">
        <Row gutter={[40, 40]}>
          <Col span={12}>
            <div className="AccountInformation-card">
              <div className="AccountInformation-card-header">Thông tin cá nhân</div>
              <div className="AccountInformation-card-body">
                <Form layout="vertical" className="AccountInformation-card-form">
                  <Form.Item name="avatar" rules={[validationRules.required()]}>
                    <UploadAvatar />
                  </Form.Item>
                  <br />
                  <Form.Item name="username" rules={[validationRules.required()]}>
                    <Input placeholder="Nhập tên đăng nhập" label="Tên đăng nhập" />
                  </Form.Item>

                  <Form.Item name="phoneNumber" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                    <Input placeholder="Nhập số điện thoại" label="Số điện thoại" />
                  </Form.Item>

                  <div className="AccountInformation-form-submit">
                    <Button title="Chỉnh sửa" htmlType="submit" />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="AccountInformation-card">
              <div className="AccountInformation-card-header">Đổi mật khẩu</div>
              <div className="AccountInformation-card-body">
                <Form layout="vertical" className="AccountInformation-card-form">
                  <Form.Item name="oldPassword" rules={[validationRules.required()]}>
                    <Input type="password" placeholder="Nhập mật khẩu hiện tại" label="Mật khẩu hiện tại" />
                  </Form.Item>

                  <Form.Item name="password" rules={[validationRules.required()]}>
                    <Input
                      type="password"
                      placeholder="Nhập mật khẩu mới"
                      label="Mật khẩu mới"
                      onChange={(e): void => setPasswordValue(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
                  >
                    <Input type="password" placeholder="Nhập lại mật khẩu mới" label="Xác nhận mật khẩu mới" />
                  </Form.Item>

                  <div className="AccountInformation-form-submit">
                    <Button title="Hoàn thành" htmlType="submit" />
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
