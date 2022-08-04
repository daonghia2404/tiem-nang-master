import React, { useEffect } from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';

import { TBookQuestionFormProps } from './BookQuestionForm.types';
import './BookQuestionForm.scss';

const BookQuestionForm: React.FC<TBookQuestionFormProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.resetFields();
    }
  }, [form, visible]);

  return (
    <Modal width={776} className="BookQuestionForm" visible={visible} title="Đặt câu hỏi" onClose={onClose}>
      <div className="BookQuestionForm-wrapper">
        <Form form={form} layout="vertical">
          <Form.Item name="name">
            <Input label="Tên của bạn" placeholder="Nhập tên của bạn" />
          </Form.Item>
          <Form.Item name="content" rules={[validationRules.required()]}>
            <TextArea label="Nhập câu hỏi" placeholder="Nhập nội dung" />
          </Form.Item>

          <div className="BookQuestionForm-submit">
            <Button title="Gửi câu hỏi" htmlType="submit" />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default BookQuestionForm;
