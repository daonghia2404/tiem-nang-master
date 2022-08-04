import React from 'react';
import { Col, Form, Row } from 'antd';

import { TContactFormProps } from './ContactForm.types.d';
import './ContactForm.scss';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Select from '@/components/Select';
import DatePicker from '@/components/DatePicker';
import TextArea from '@/components/TextArea';

const ContactForm: React.FC<TContactFormProps> = () => {
  const [form] = Form.useForm();

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="ContactForm-wrapper">
          <div className="ContactForm-title">Tư vấn</div>
          <Form form={form} className="ContactForm-form">
            <Row gutter={[40, 40]}>
              <Col span={12}>
                <Form.Item name="name" rules={[validationRules.required()]}>
                  <Input label="Tên của bạn" placeholder="Nhập tên" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="issue" rules={[validationRules.required()]}>
                  <Select label="Vấn đề gặp phải" placeholder="Chọn nguyên nhân" options={[]} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="time" rules={[validationRules.required()]}>
                  <DatePicker label="Đặt lịch tư vấn" placeholder="Thời gian" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="contact" rules={[validationRules.required()]}>
                  <Input label="Liên hệ" placeholder="Số điện thoại/Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="content" rules={[validationRules.required()]}>
                  <TextArea label="Nội dung tư vấn" placeholder="Tóm tắt câu chuyện của bạn" />
                </Form.Item>
              </Col>
            </Row>

            <div className="ContactForm-form-submit flex justify-center">
              <Button title="Đặt lịch tư vấn" />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
