import React from 'react';
import { Col, Row } from 'antd';

import { TAdminProps } from '@/layouts/Admin/Admin.types';
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import MyAccount from '@/containers/MyAccount';

import './Admin.scss';

const Admin: React.FC<TAdminProps> = ({ children }) => {
  return (
    <div className="Admin">
      <div className="Admin-header">
        <Header />
      </div>
      <div className="Admin-body">
        <div className="container">
          <Row gutter={[40, 40]}>
            <Col span={24} lg={{ span: 7 }}>
              <MyAccount />
            </Col>
            <Col span={24} lg={{ span: 17 }}>
              {children}
            </Col>
          </Row>
        </div>
      </div>
      <div className="Admin-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Admin;
