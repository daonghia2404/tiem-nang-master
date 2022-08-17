import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'antd';

import { TRootState } from '@/redux/reducers';
import { ETransactionType } from '@/services/api';
import Modal from '@/components/Modal';
import Radio from '@/components/Radio';
import Button from '@/components/Button';
import { EIconColor } from '@/components/Icon';

import { TModalBuyBookProps } from './ModalBuyBook.types';
import './ModalBuyBook.scss';

const ModalBuyBook: React.FC<TModalBuyBookProps> = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;
  const membershipState = useSelector((state: TRootState) => state.membershipReducer.getMyMembershipResponse?.data);
  const bookData = productState?.book;

  const dataPaymentTypeOptions = [
    {
      label: (
        <>
          Ví của tôi
          <span style={{ fontSize: '1.6rem', marginLeft: '0.4rem', color: EIconColor.SCORPION }}>
            ({profileState?.bcoin} Bcoin)
          </span>
        </>
      ),
      value: ETransactionType.BUY_USE_WALLET,
    },
    {
      label: (
        <>
          Thẻ hội viên
          <span style={{ fontSize: '1.6rem', marginLeft: '0.4rem', color: EIconColor.SCORPION }}>
            (còn {membershipState?.book_for_free} cuốn)
          </span>
        </>
      ),
      value: ETransactionType.BUY_USE_CARD,
      disabled: (membershipState?.book_for_free || 0) === 0,
    },
  ];

  const handleBuyBook = (values: any): void => {
    const body = {
      payment_type: values?.payment_type?.value,
    };
    onSubmit?.(body);
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        payment_type: dataPaymentTypeOptions[0],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, form]);

  return (
    <Modal width={765} className="ModalBuyBook" visible={visible} onClose={onClose} title="Thanh toán sách">
      <div className="ModalBuyBook-wrapper">
        <div className="ModalBuyBook-text">
          {bookData?.name}
          <strong>
            {bookData?.price} <small>Bcoin</small>
          </strong>
        </div>
        <Form form={form} layout="vertical" onFinish={handleBuyBook}>
          <Form.Item label="Thanh toán bằng" name="payment_type">
            <Radio options={dataPaymentTypeOptions} />
          </Form.Item>

          <div className="ModalBuyBook-submit">
            <Button title="Thanh toán" htmlType="submit" />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalBuyBook;
