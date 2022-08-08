/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react';
import { Col, Collapse, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import { EGetBanksListAction, getBanksListAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import './ListBanks.scss';

const { Panel } = Collapse;

const ListBanks: React.FC = () => {
  const dispatch = useDispatch();

  const listBankState = useSelector((state: TRootState) => state.bankingReducer.getBanksListResponse?.data);
  const getListBankLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetBanksListAction.GET_BANKS_LIST],
  );
  const firstBankId = listBankState?.[0]?._id || 0;

  const getListBank = useCallback(() => {
    dispatch(getBanksListAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    getListBank();
  }, [getListBank]);

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
          <Col span={24} md={{ span: 12 }}>
            <Input label="Nội dung chuyển khoản" readOnly value={content} copy />
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Input label="Số tài khoản" readOnly value={accountNumber} copy />
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Input label="Tên chủ tài khoản" readOnly value={nameAccount} />
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <Input label="Tên ngân hàng" readOnly value={nameBank} />
          </Col>
        </Row>
      </div>
    );
  };
  const dataFriendlyAnswerQuestions = listBankState?.map((item) => ({
    key: item._id,
    title: renderListBanksHeader(item.icon_url, item.bank_name),
    description: renderListBanksBody('Nạp Bcoin', item.bank_account, item.owner_name, item.bank_name),
  }));

  return (
    <div className="ListBanks">
      <div className="container">
        <div className="ListBanks-wrapper">
          {!getListBankLoading && (
            <Collapse
              defaultActiveKey={[firstBankId]}
              accordion
              expandIcon={({ isActive }): React.ReactNode =>
                isActive ? <Icon name={EIconName.Check} color={EIconColor.GREEN_HAZE} /> : <></>
              }
              expandIconPosition="right"
            >
              {dataFriendlyAnswerQuestions?.map((item) => (
                <Panel key={item.key} header={item.title}>
                  {item.description}
                </Panel>
              ))}
            </Collapse>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListBanks;
