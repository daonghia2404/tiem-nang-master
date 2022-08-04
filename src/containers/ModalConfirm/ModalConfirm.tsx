import React from 'react';
import { Col, Row } from 'antd';

import Modal from '@/components/Modal';
import Button from '@/components/Button';

import { TModalConfirmProps } from './ModalConfirm.types.d';
import './ModalConfirm.scss';

const ModalConfirm: React.FC<TModalConfirmProps> = ({ visible, width = 765, title, text, onClose, onSubmit }) => {
  return (
    <Modal closeable={false} width={width} visible={visible} onClose={onClose} hideFooter className="ModalConfirm">
      <div className="ModalConfirm-header">{title}</div>
      <div className="ModalConfirm-body">{text}</div>
      <div className="ModalConfirm-footer">
        <Row gutter={40}>
          <Col span={12}>
            <Button title="Hủy bỏ" type="default" onClick={onClose} />
          </Col>
          <Col span={12}>
            <Button title="Đồng ý" type="primary" onClick={onSubmit} />
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
