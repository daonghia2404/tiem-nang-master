/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useParams } from '@reach/router';

import Rate from '@/components/Rate';
import Slider from '@/components/Slider';
import BackgroundForm from '@/components/BackgroundForm';
import TabChapter from '@/pages/BookReader/TabChapter';
import TabDocument from '@/pages/BookReader/TabDocument';
import TabQuestion from '@/pages/BookReader/TabQuestion';
import { getProductAction, uiActions } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { TProductFile } from '@/common/models';
import BookPdf from '@/pages/BookReader/BookPdf';
import { TSelectOption } from '@/components/Select';

import { EKeyBookReaderTab } from './BookReader.enums';
import { dataBackgroundSetting, dataBookReaderTabs } from './BookReader.data';
import './BookReader.scss';

const BookReader: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [keyTabBookReader, setKeyTabBookReader] = useState<EKeyBookReaderTab>(EKeyBookReaderTab.CHAPTERS);

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;

  const audioState = useSelector((state: TRootState) => state.uiReducer.audio);
  const voice = audioState?.voice;
  const isAudioPlay = audioState?.isAudioPlay;
  const isAudioLoading = audioState?.isAudioLoading;

  const [file, setFile] = useState<TProductFile>();
  const [config, setConfig] = useState<{
    background: TSelectOption;
    fontSize: number;
  }>({
    background: dataBackgroundSetting[0],
    fontSize: 16,
  });

  const handleChangeKeyTabBookReader = (key: EKeyBookReaderTab): void => {
    setKeyTabBookReader(key);
  };

  const getProduct = useCallback(() => {
    if (id) dispatch(getProductAction.request({ paths: { id } }));
  }, [id, dispatch]);

  useEffect(() => {
    if (productState) {
      if (!productState?.is_buy) {
        navigate(Paths.BookDetail(bookData?.slug, id));
        showNotification(ETypeNotification.ERROR, 'Bạn chưa mua tâm sách này. Vui lòng mua tâm sách trước');
      } else if (productState.book?.voice?.[0]) {
        dispatch(uiActions.setAudio({ voice: productState.book?.voice?.[0], visible: true }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, productState]);

  useEffect(() => {
    const isExistedFiles = productState?.book?.file && productState?.book?.file?.length > 0;
    if (voice && isExistedFiles) {
      const currentIndexVoice = voice.index - 1;
      setFile(productState?.book.file[currentIndexVoice]);
    }
  }, [voice, productState]);

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
            <Col span={24} lg={{ span: 16 }}>
              <BookPdf source={file} fontSize={config.fontSize} background={config.background?.value} />
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <div className="BookReader-tabs">
                <div className="BookReader-tabs-header flex">
                  {dataBookReaderTabs.map((item) => (
                    <div
                      key={item.value}
                      className={classNames('BookReader-tabs-header-item', { active: keyTabBookReader === item.value })}
                      onClick={(): void => handleChangeKeyTabBookReader(item.value)}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                <div className="BookReader-tabs-body">
                  {keyTabBookReader === EKeyBookReaderTab.CHAPTERS && (
                    <TabChapter source={voice} isAudioPlay={isAudioPlay} isAudioLoading={isAudioLoading} />
                  )}
                  {keyTabBookReader === EKeyBookReaderTab.QUESTIONS && <TabQuestion />}
                  {keyTabBookReader === EKeyBookReaderTab.DOCUMENTS && (
                    <TabDocument source={file} onClickDocument={setFile} />
                  )}
                </div>
              </div>
              <div className="BookReader-setting">
                <div className="BookReader-setting-header">Thiết lập</div>
                <div className="BookReader-setting-body">
                  <div className="BookReader-setting-form">
                    <div className="ant-form-item">
                      <Slider
                        label="Kích thước chữ"
                        value={config.fontSize}
                        min={10}
                        max={20}
                        step={1}
                        onChange={(value): void =>
                          setConfig({
                            ...config,
                            fontSize: value,
                          })
                        }
                        marks={{
                          10: '10',
                          16: '16',
                          20: '20',
                        }}
                      />
                    </div>

                    <div className="ant-form-item">
                      <BackgroundForm
                        value={config.background}
                        label="Màu nền"
                        options={dataBackgroundSetting}
                        onChange={(value): void =>
                          setConfig({
                            ...config,
                            background: value,
                          })
                        }
                      />
                    </div>
                  </div>
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
