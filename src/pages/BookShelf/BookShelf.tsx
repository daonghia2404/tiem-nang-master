import React, { useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import BookBlock from '@/components/BookBlock';
import { dataBooksList } from '@/containers/BooksList/BooksList.data';
import AccountReward from '@/containers/AccountReward';

import { dataBookShelfTabs } from './BookShelf.data';
import './BookShelf.scss';
import { Paths } from '@/pages/routers';

const BookShelf: React.FC = () => {
  const [keyBookShelfTab, setKeyBookShelfTab] = useState('BOUGHT');

  const handleChangeKeyBookShelfTab = (key: string): void => {
    setKeyBookShelfTab(key);
  };

  return (
    <div className="BookShelf">
      <div className="container">
        <div className="BookShelf-wrapper">
          <Row gutter={40}>
            <Col span={8}>
              <AccountReward />
            </Col>
            <Col span={16}>
              <div className="BookShelf-tabs">
                <div className="BookShelf-tabs-header">
                  <Row>
                    {dataBookShelfTabs.map((item) => (
                      <Col span={12}>
                        <div
                          key={item.value}
                          className={classNames('BookShelf-tabs-header-item', {
                            active: keyBookShelfTab === item.value,
                          })}
                          onClick={(): void => handleChangeKeyBookShelfTab(item.value)}
                        >
                          {item.label}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className="BookShelf-tabs-body">
                  <Row gutter={[80, 30]}>
                    {dataBooksList.map((item) => (
                      <Col key={item.id} span={8}>
                        {/* <BookBlock {...item} /> */}
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
