import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Modal from '@/components/Modal';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Slider from '@/components/Slider';
import { showNotification, validationRules } from '@/utils/functions';
import { ERateProductAction, rateProductAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';

import { TBookRateFormProps } from './BookRateForm.types';
import './BookRateForm.scss';

const BookRateForm: React.FC<TBookRateFormProps> = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();

  const rateProductLoading = useSelector((state: TRootState) => state.loadingReducer[ERateProductAction.RATE_PRODUCT]);

  const handleSubmit = (values: any): void => {
    const body = values;
    dispatch(rateProductAction.request({ body, paths: { id } }, handleRateProductSuccess));
  };

  const handleRateProductSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đánh giá tâm sách thành công');
    onClose?.();
    onSubmit?.();
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        voiceStar: 1,
        contentStar: 1,
        content: '',
      });
    }
  }, [form, visible]);

  return (
    <Modal width={776} className="BookRateForm" visible={visible} title="Viết đánh giá" onClose={onClose}>
      <div className="BookRateForm-wrapper">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="voiceStar">
            <Slider label="Giọng đọc" min={1} max={5} step={0.5} showValue />
          </Form.Item>
          <Form.Item name="contentStar">
            <Slider label="Nội dung" min={1} max={5} step={0.5} showValue />
          </Form.Item>
          <Form.Item name="content" rules={[validationRules.required()]}>
            <TextArea label="Đánh giá của bạn" placeholder="Nhập nội dung" />
          </Form.Item>

          <div className="BookRateForm-submit">
            <Button title="Gửi đánh giá" htmlType="submit" loading={rateProductLoading} />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default BookRateForm;
