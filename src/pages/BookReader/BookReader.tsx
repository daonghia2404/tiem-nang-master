import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';
import classNames from 'classnames';

import Rate from '@/components/Rate';
import Slider from '@/components/Slider';
import BackgroundForm from '@/components/BackgroundForm';
import TabChapter from '@/pages/BookReader/TabChapter';
import TabDocument from '@/pages/BookReader/TabDocument';
import TabQuestion from '@/pages/BookReader/TabQuestion';

import { EKeyBookReaderTab } from './BookReader.enums';
import { dataBackgroundSetting, dataBookReaderTabs } from './BookReader.data';
import './BookReader.scss';

const BookReader: React.FC = () => {
  const [form] = Form.useForm();
  const [keyTabBookReader, setKeyTabBookReader] = useState<EKeyBookReaderTab>(EKeyBookReaderTab.CHAPTERS);

  const handleChangeKeyTabBookReader = (key: EKeyBookReaderTab): void => {
    setKeyTabBookReader(key);
  };

  return (
    <div className="BookReader">
      <div className="container">
        <div className="BookReader-wrapper">
          <div className="BookReader-header">
            <div className="BookReader-header-title">Khoa học & đời sống</div>
            <Row justify="space-between" align="middle">
              <Col>
                <div className="BookReader-header-author">William </div>
              </Col>

              <Col>
                <div className="BookReader-header-rate flex items-center">
                  4.0
                  <Rate value={3.5} disabled />
                </div>
              </Col>
            </Row>
          </div>
          <Row gutter={[40, 24]}>
            <Col span={16} />
            <Col span={8}>
              <div className="BookReader-tabs">
                <div className="BookReader-tabs-header flex">
                  {dataBookReaderTabs.map((item) => (
                    <div
                      className={classNames('BookReader-tabs-header-item', { active: keyTabBookReader === item.value })}
                      onClick={(): void => handleChangeKeyTabBookReader(item.value)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                <div className="BookReader-tabs-body">
                  {keyTabBookReader === EKeyBookReaderTab.CHAPTERS && <TabChapter />}
                  {keyTabBookReader === EKeyBookReaderTab.QUESTIONS && <TabQuestion />}
                  {keyTabBookReader === EKeyBookReaderTab.DOCUMENTS && <TabDocument />}
                </div>
              </div>
              <div className="BookReader-setting">
                <div className="BookReader-setting-header">Thiết lập</div>
                <div className="BookReader-setting-body">
                  <Form form={form} className="BookReader-setting-form">
                    <Form.Item name="fontSize">
                      <Slider
                        label="Kích thước chữ"
                        min={10}
                        max={20}
                        step={1}
                        marks={{
                          10: '10',
                          16: '16',
                          20: '20',
                        }}
                      />
                    </Form.Item>
                    <Form.Item name="background">
                      <BackgroundForm label="Màu nền" options={dataBackgroundSetting} />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
