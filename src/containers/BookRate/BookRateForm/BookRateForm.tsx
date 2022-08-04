import React, { useEffect } from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import { validationRules } from '@/utils/functions';

import { TBookRateFormProps } from './BookRateForm.types';
import './BookRateForm.scss';

const BookRateForm: React.FC<TBookRateFormProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [form, visible]);

  return (
    <Modal width={776} className="BookRateForm" visible={visible} title="Viết đánh giá" onClose={onClose}>
      <div className="BookRateForm-wrapper">
        <Form form={form} layout="vertical">
          <Form.Item name="voice">
            <Slider label="Giọng đọc" min={1} max={5} step={0.5} showValue bordered />
          </Form.Item>
          <Form.Item name="content">
            <Slider label="Nội dung" min={1} max={5} step={0.5} showValue bordered />
          </Form.Item>
          <Form.Item name="review" rules={[validationRules.required()]}>
            <TextArea label="Đánh giá của bạn" placeholder="Nhập nội dung" />
          </Form.Item>

          <div className="BookRateForm-submit">
            <Button title="Gửi đánh giá" htmlType="submit" />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default BookRateForm;
