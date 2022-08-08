import React, { useCallback, useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useParams } from '@reach/router';

import Rate from '@/components/Rate';
import Slider from '@/components/Slider';
import BackgroundForm from '@/components/BackgroundForm';
import TabChapter from '@/pages/BookReader/TabChapter';
import TabDocument from '@/pages/BookReader/TabDocument';
import TabQuestion from '@/pages/BookReader/TabQuestion';
import { getProductAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import { EKeyBookReaderTab } from './BookReader.enums';
import { dataBackgroundSetting, dataBookReaderTabs } from './BookReader.data';
import './BookReader.scss';
import { Paths } from '@/pages/routers';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

const BookReader: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [keyTabBookReader, setKeyTabBookReader] = useState<EKeyBookReaderTab>(EKeyBookReaderTab.CHAPTERS);

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;

  const handleChangeKeyTabBookReader = (key: EKeyBookReaderTab): void => {
    setKeyTabBookReader(key);
  };

  const getProduct = useCallback(() => {
    if (id) dispatch(getProductAction.request({ paths: { id } }));
  }, [id, dispatch]);

  useEffect(() => {
    if (productState && !productState?.is_buy) {
      navigate(Paths.BookDetail(bookData?.slug, id));
      showNotification(ETypeNotification.ERROR, 'Bạn chưa mua tâm sách này. Vui lòng mua tâm sách trước');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, productState]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className="BookReader">
      <div className="container">
        <div className="BookReader-wrapper">
          <div className="BookReader-header">
            <div className="BookReader-header-title">{bookData?.name}</div>
            <Row justify="space-between" align="middle">
              <Col>
                <div className="BookReader-header-author">{bookData?.author?.name}</div>
              </Col>

              <Col>
                <div className="BookReader-header-rate flex items-center">
                  {(((bookData?.avgContentRate || 0) + (bookData?.avgVoiceRate || 0)) / 2)?.toFixed(1)}
                  <Rate value={((bookData?.avgContentRate || 0) + (bookData?.avgVoiceRate || 0)) / 2} disabled />
                </div>
              </Col>
            </Row>
          </div>
          <Row gutter={[40, 24]}>
            <Col span={24} lg={{ span: 16 }} />
            <Col span={24} lg={{ span: 8 }}>
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
