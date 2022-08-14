import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Modal from '@/components/Modal';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { askProductQuestionAction, EAskProductQuestionAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import { TBookQuestionFormProps } from './BookQuestionForm.types';
import './BookQuestionForm.scss';

const BookQuestionForm: React.FC<TBookQuestionFormProps> = ({ visible, onClose, onSubmit }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { id } = useParams();
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);

  const askQuestionLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAskProductQuestionAction.ASK_PRODUCT_QUESTION],
  );

  const handleSubmit = (values: any): void => {
    const body = values;
    dispatch(askProductQuestionAction.request({ body, paths: { id } }, handleAskProductQuestionSuccess));
  };

  const handleAskProductQuestionSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đặt câu hỏi thành công');
    onClose?.();
    onSubmit?.();
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        name: profileState?.name,
        question: '',
      });
    }
  }, [form, visible, profileState]);

  return (
    <Modal width={776} className="BookQuestionForm" visible={visible} title="Đặt câu hỏi" onClose={onClose}>
      <div className="BookQuestionForm-wrapper">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name" rules={[validationRules.required()]}>
            <Input label="Tên của bạn" placeholder="Nhập tên của bạn" />
          </Form.Item>
          <Form.Item name="question" rules={[validationRules.required()]}>
            <TextArea label="Nhập câu hỏi" placeholder="Nhập nội dung" />
          </Form.Item>

          <div className="BookQuestionForm-submit">
            <Button title="Đặt câu hỏi" htmlType="submit" loading={askQuestionLoading} />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default BookQuestionForm;
