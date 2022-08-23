import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';

import HistoryBooks from '@/pages/HistoryTranscation/HistoryBooks';
import HistoryPayment from '@/pages/HistoryTranscation/HistoryPayment';
import HistoryCoin from '@/pages/HistoryTranscation/HistoryCoin';
import { ETransactionType, TGetTransactionParams } from '@/services/api';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getTransactionAction } from '@/redux/actions/transaction';

import { dataHistoryTranscationTabs } from './HistoryTranscation.data';
import './HistoryTranscation.scss';

const HistoryTranscation: React.FC = () => {
  const dispatch = useDispatch();

  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const getTransactionState = useSelector((state: TRootState) => state.transactionReducer.getTransactionResponse?.data);
  const [getTransactionParamsRequest, setGetTransactionParamsRequest] = useState<TGetTransactionParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    type: ETransactionType.BUY_USE_WALLET,
  });

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetTransactionParamsRequest({
      ...getTransactionParamsRequest,
      page,
      pageSize: pageSize || getTransactionParamsRequest.pageSize,
    });
  };

  const handleChangeHistoryTranscationTab = (type: ETransactionType): void => {
    setGetTransactionParamsRequest({
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
      type,
    });
  };

  const getTransactionList = useCallback(() => {
    dispatch(getTransactionAction.request({ params: getTransactionParamsRequest }));
  }, [dispatch, getTransactionParamsRequest]);

  useEffect(() => {
    getTransactionList();
  }, [getTransactionList]);

  return (
    <div className="HistoryTranscation">
      <div className="HistoryTranscation-wrapper">
        <div className="HistoryTranscation-tabs">
          <div className="HistoryTranscation-tabs-header">
            <Row gutter={[20, 20]}>
              {dataHistoryTranscationTabs.map((item) => (
                <Col span={isMobile ? 24 : undefined}>
                  <div
                    key={item.value}
                    className={classNames('HistoryTranscation-tabs-header-item', {
                      active: getTransactionParamsRequest.type === item.value,
                    })}
                    onClick={(): void => handleChangeHistoryTranscationTab(item.value)}
                  >
                    {item.label}
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <div className="HistoryTranscation-tabs-body">
            {getTransactionParamsRequest.type === ETransactionType.BUY_USE_WALLET && (
              <HistoryBooks
                data={getTransactionState?.records}
                page={getTransactionParamsRequest.page}
                pageSize={getTransactionParamsRequest.pageSize}
                total={getTransactionState?.total}
                onPaginateChange={handlePageChange}
              />
            )}
            {getTransactionParamsRequest.type === ETransactionType.RECHARGE && (
              <HistoryPayment
                data={getTransactionState?.records}
                page={getTransactionParamsRequest.page}
                pageSize={getTransactionParamsRequest.pageSize}
                total={getTransactionState?.total}
                onPaginateChange={handlePageChange}
              />
            )}
            {getTransactionParamsRequest.type === ETransactionType.APPELATION_RECEIVED && (
              <HistoryCoin
                data={getTransactionState?.records}
                page={getTransactionParamsRequest.page}
                pageSize={getTransactionParamsRequest.pageSize}
                total={getTransactionState?.total}
                onPaginateChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTranscation;
