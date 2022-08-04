import React from 'react';

import Modal from '@/components/Modal';
import ImageVnPay from '@/assets/images/image-vn-pay.png';
import ImageViettelPay from '@/assets/images/image-viettel-pay.png';
import ImageMomo from '@/assets/images/image-momo.png';

import { TPaymentMethodModalProps } from './PaymentMethodModal.types.d';
import './PaymentMethodModal.scss';
import Button from '@/components/Button';

const PaymentMethodModal: React.FC<TPaymentMethodModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      width={776}
      visible={visible}
      onClose={onClose}
      title="Chọn phương thức thanh toán"
      className="PaymentMethodModal"
    >
      <div className="PaymentMethodModal-wrapper">
        <div className="PaymentMethodModal-methods">
          <div className="PaymentMethodModal-methods-item flex items-center">
            <div className="PaymentMethodModal-methods-item-label">Chuyển khoản ngân hàng</div>
          </div>

          <div className="PaymentMethodModal-methods-item flex items-center">
            <div className="PaymentMethodModal-methods-item-icon">
              <img src={ImageVnPay} alt="" />
            </div>
            <div className="PaymentMethodModal-methods-item-label">VNpay</div>
          </div>

          <div className="PaymentMethodModal-methods-item flex items-center">
            <div className="PaymentMethodModal-methods-item-icon">
              <img src={ImageViettelPay} alt="" />
            </div>
            <div className="PaymentMethodModal-methods-item-label">Viettel pay</div>
          </div>

          <div className="PaymentMethodModal-methods-item flex items-center">
            <div className="PaymentMethodModal-methods-item-icon">
              <img src={ImageMomo} alt="" />
            </div>
            <div className="PaymentMethodModal-methods-item-label">Momo</div>
          </div>
        </div>

        <div className="PaymentMethodModal-text">Lưu ý: quy đổi 1.000 vnđ = 1 Bcoin </div>

        <div className="PaymentMethodModal-btn">
          <Button title="Nạp ngay" />
        </div>
      </div>
    </Modal>
  );
};

export default PaymentMethodModal;
