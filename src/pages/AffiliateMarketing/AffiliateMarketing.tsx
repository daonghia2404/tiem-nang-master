import React, { useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import ImageConnectionPeople from '@/assets/images/image-connection-people.png';
import BgAffiliateMarketing from '@/assets/images/bg-affiliate-marketing.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import HistoryCoin from '@/pages/AffiliateMarketing/HistoryCoin';
import Events from '@/pages/AffiliateMarketing/Events';
import { copyText } from '@/utils/functions';

import { dataAffiliateMarketingTabs } from './AffiliateMarketing.data';
import './AffiliateMarketing.scss';

const AffiliateMarketing: React.FC = () => {
  const [keyAffiliateMarketingTab, setKeyAffiliateMarketingTab] = useState('HISTORY_COIN');

  const handleChangeAffiliateMarketingTab = (key: string): void => {
    setKeyAffiliateMarketingTab(key);
  };

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
            <div className="AffiliateMarketing-banner-code-value">123456ABC</div>
            <div
              className="AffiliateMarketing-banner-code-copy flex items-center"
              onClick={(): void => copyText('123456ABC')}
            >
              <Icon name={EIconName.Copy} color={EIconColor.ORANGE_PEEL} />
              Copy
            </div>
          </div>
        </div>

        <div className="AffiliateMarketing-tabs">
          <div className="AffiliateMarketing-tabs-header">
            <Row>
              {dataAffiliateMarketingTabs.map((item) => (
                <Col span={12}>
                  <div
                    key={item.value}
                    className={classNames('AffiliateMarketing-tabs-header-item', {
                      active: keyAffiliateMarketingTab === item.value,
                    })}
                    onClick={(): void => handleChangeAffiliateMarketingTab(item.value)}
                  >
                    {item.label}
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <div className="AffiliateMarketing-tabs-body">
            {keyAffiliateMarketingTab === 'HISTORY_COIN' && <HistoryCoin />}
            {keyAffiliateMarketingTab === 'EVENT' && <Events />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMarketing;
