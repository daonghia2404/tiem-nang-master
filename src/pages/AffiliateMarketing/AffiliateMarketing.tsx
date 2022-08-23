import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import ImageConnectionPeople from '@/assets/images/image-connection-people.png';
import BgAffiliateMarketing from '@/assets/images/bg-affiliate-marketing.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { copyText } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getTransactionAction } from '@/redux/actions';
import { TGetTransactionParams, ETransactionType } from '@/services/api';
import HistoryCoin from '@/pages/HistoryTranscation/HistoryCoin';

import { dataAffiliateMarketingTabs } from './AffiliateMarketing.data';
import './AffiliateMarketing.scss';

const AffiliateMarketing: React.FC = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;

  const getTransactionState = useSelector((state: TRootState) => state.transactionReducer.getTransactionResponse?.data);
  const [getTransactionParamsRequest, setGetTransactionParamsRequest] = useState<TGetTransactionParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    type: ETransactionType.APPELATION_RECEIVED,
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
    <div className="AffiliateMarketing">
      <div className="AffiliateMarketing-wrapper">
        <div className="AffiliateMarketing-banner flex flex-col items-center justify-center">
          <div className="AffiliateMarketing-banner-bg">
            <img src={BgAffiliateMarketing} alt="" />
          </div>

          <div className="AffiliateMarketing-banner-image">
            <img src={ImageConnectionPeople} alt="" />
          </div>

          <div className="AffiliateMarketing-banner-description">Chia sẻ mã giới thiệu của bạn để nhận coin</div>
          <div className="AffiliateMarketing-banner-code flex items-center">
            <div className="AffiliateMarketing-banner-code-value">{profileState?.referralId}</div>
            <div
              className="AffiliateMarketing-banner-code-copy flex items-center"
              onClick={(): void => copyText(profileState?.referralId || '')}
            >
              <Icon name={EIconName.Copy} color={EIconColor.ORANGE_PEEL} />
              Copy
            </div>
          </div>
        </div>

        <div className="AffiliateMarketing-tabs">
          <div className="AffiliateMarketing-tabs-header">
            {/* eslint-disable-next-line no-constant-condition */}
            {true ? (
              <div className="AffiliateMarketing-tabs-header-title">Lịch sử nhận coin</div>
            ) : (
              <Row>
                {dataAffiliateMarketingTabs.map((item) => (
                  <Col span={12}>
                    <div
                      key={item.value}
                      className={classNames('AffiliateMarketing-tabs-header-item', {
                        active: getTransactionParamsRequest.type === item.value,
                      })}
                      onClick={(): void => handleChangeHistoryTranscationTab(item.value)}
                    >
                      {item.label}
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </div>

          <div className="AffiliateMarketing-tabs-body">
            {getTransactionParamsRequest.type === ETransactionType.APPELATION_RECEIVED && (
              <HistoryCoin
                data={getTransactionState?.records}
                page={getTransactionParamsRequest.page}
                pageSize={getTransactionParamsRequest.pageSize}
                total={getTransactionState?.total}
                onPaginateChange={handlePageChange}
              />
            )}
            {/* {getTransactionParamsRequest.type === 'EVENT' && <Events />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMarketing;
