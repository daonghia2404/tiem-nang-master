import React from 'react';
import { Col, Collapse, Row } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import LogoVietcombank from '@/assets/images/logo-vietcombank.svg';
import LogoTechcombank from '@/assets/images/logo-techcombank.svg';

import './ListBanks.scss';

const { Panel } = Collapse;

const ListBanks: React.FC = () => {
  const renderListBanksHeader = (logo: string, label: string): React.ReactNode => {
    return (
      <div className="ListBanks-item-header flex items-center">
        <div className="ListBanks-item-header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="ListBanks-item-header-label">{label}</div>
      </div>
    );
  };

  const renderListBanksBody = (
    content: string,
    accountNumber: string,
    nameAccount: string,
    nameBank: string,
  ): React.ReactNode => {
    return (
      <div className="ListBanks-item-body">
        <Row gutter={[40, 30]}>
          <Col span={12}>
            <Input label="Nội dung chuyển khoản" readOnly value={content} copy />
          </Col>
          <Col span={12}>
            <Input label="Số tài khoản" readOnly value={accountNumber} copy />
          </Col>
          <Col span={12}>
            <Input label="Tên chủ tài khoản" readOnly value={nameAccount} />
          </Col>
          <Col span={12}>
            <Input label="Tên ngân hàng" readOnly value={nameBank} />
          </Col>
        </Row>
      </div>
    );
  };
  const dataFriendlyAnswerQuestions = [
    {
      key: 1,
      title: renderListBanksHeader(LogoVietcombank, 'Vietcombank'),
      description: renderListBanksBody('Nạp Bcoin', '36044123456789', 'Công ty BCA', 'Vietcombank'),
    },
    {
      key: 2,
      title: renderListBanksHeader(LogoTechcombank, 'Techcombank'),
      description: renderListBanksBody('Nạp Bcoin', '47155234567890', 'Công ty BCA', 'Techcombank'),
    },
  ];
  return (
    <div className="ListBanks">
      <div className="container">
        <div className="ListBanks-wrapper">
          <Collapse
            defaultActiveKey={[1]}
            accordion
            expandIcon={({ isActive }): React.ReactNode =>
              isActive ? <Icon name={EIconName.Check} color={EIconColor.GREEN_HAZE} /> : <></>
            }
            expandIconPosition="right"
          >
            {dataFriendlyAnswerQuestions.map((item) => (
              <Panel key={item.key} header={item.title}>
                {item.description}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ListBanks;
