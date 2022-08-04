import React, { useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';

import HistoryBooks from '@/pages/HistoryTranscation/HistoryBooks';
import HistoryPayment from '@/pages/HistoryTranscation/HistoryPayment';
import HistoryCoin from '@/pages/HistoryTranscation/HistoryCoin';

import { dataHistoryTranscationTabs } from './HistoryTranscation.data';
import './HistoryTranscation.scss';

const HistoryTranscation: React.FC = () => {
  const [keyHistoryTranscationTab, setKeyHistoryTranscationTab] = useState('HISTORY_BOOKS');

  const handleChangeHistoryTranscationTab = (key: string): void => {
    setKeyHistoryTranscationTab(key);
  };

  return (
    <div className="HistoryTranscation">
      <div className="HistoryTranscation-wrapper">
        <div className="HistoryTranscation-tabs">
          <div className="HistoryTranscation-tabs-header">
            <Row>
              {dataHistoryTranscationTabs.map((item) => (
                <Col span={8}>
                  <div
                    key={item.value}
                    className={classNames('HistoryTranscation-tabs-header-item', {
                      active: keyHistoryTranscationTab === item.value,
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
            {keyHistoryTranscationTab === 'HISTORY_BOOKS' && <HistoryBooks />}
            {keyHistoryTranscationTab === 'HISTORY_PAYMENT' && <HistoryPayment />}
            {keyHistoryTranscationTab === 'HISTORY_COIN' && <HistoryCoin />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTranscation;
