import React from 'react';
import { Col, Row } from 'antd';

import ImageContactBanner from '@/assets/images/image-contact.png';
import ContactForm from '@/containers/ContactForm';

import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <div className="container">
        <div className="Contact-wrapper">
          <Row gutter={[20, 24]}>
            <Col span={24} lg={{ span: 12 }}>
              <div className="Contact-image">
                <img src={ImageContactBanner} alt="" />
              </div>
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
