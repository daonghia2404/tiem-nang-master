import React from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { TRootState } from '@/redux/reducers';

import { TModalConfirmProps } from './ModalConfirm.types.d';
import './ModalConfirm.scss';

const ModalConfirm: React.FC<TModalConfirmProps> = ({
  visible,
  loading,
  width = 765,
  title,
  text,
  onClose,
  onSubmit,
}) => {
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);

  return (
    <Modal closeable={false} width={width} visible={visible} onClose={onClose} hideFooter className="ModalConfirm">
      <div className="ModalConfirm-header">{title}</div>
      <div className="ModalConfirm-body">{text}</div>
      <div className="ModalConfirm-footer">
        <Row gutter={isMobile ? 24 : 40}>
          <Col span={12}>
            <Button title="Hủy bỏ" type="default" onClick={onClose} disabled={loading} />
          </Col>
          <Col span={12}>
            <Button title="Đồng ý" type="primary" onClick={onSubmit} loading={loading} />
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
