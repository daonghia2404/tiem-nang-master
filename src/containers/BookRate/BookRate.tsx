/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Rate from '@/components/Rate';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import BookRateForm from '@/containers/BookRate/BookRateForm';
import { TGetProductRateParams } from '@/services/api';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getProductRateAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import Empty from '@/components/Empty';
import { formatISODateToDateTime } from '@/utils/functions';
import { EFormat } from '@/common/enums';
import Pagination from '@/components/Pagination';

import { TBookRateProps } from './BookRate.types.d';
import './BookRate.scss';

const BookRate: React.FC<TBookRateProps> = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const [getProductRateParamsRequest, setGetProductRateParamsRequest] = useState<TGetProductRateParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const bookData = productState?.book;

  const productRateState = useSelector((state: TRootState) => state.productReducer.getProductRateResponse?.data);
  const isEmpty = productRateState?.records?.length === 0;

  const [visibleBookRateFormModal, setVisibleBookRateFormModal] = useState<boolean>(false);

  const handleOpenBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(true);
  };

  const handleCloseBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(false);
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetProductRateParamsRequest({
      ...getProductRateParamsRequest,
      page,
      pageSize: pageSize || getProductRateParamsRequest.pageSize,
    });
  };

  const getProductRate = useCallback(() => {
    dispatch(getProductRateAction.request({ params: getProductRateParamsRequest, paths: { id } }));
  }, [dispatch, getProductRateParamsRequest, id]);

  useEffect(() => {
    getProductRate();
  }, [getProductRate]);

  return (
    <div className="BookRate">
      <div className="BookRate-rate">
        <Row>
          <Col span={24} lg={{ span: 6 }}>
            <div className="BookRate-rate-total flex flex-col items-center justify-center">
              <span className="BookRate-rate-total-label">
                {(((bookData?.avgContentRate || 0) + (bookData?.avgVoiceRate || 0)) / 2)?.toFixed(1)}
              </span>
              <Rate value={((bookData?.avgContentRate || 0) + (bookData?.avgVoiceRate || 0)) / 2} disabled />
            </div>
          </Col>
          <Col span={24} lg={{ span: 12 }}>
            <div className="BookRate-rate-detail">
              <div className="BookRate-rate-detail-item">
                <div className="BookRate-rate-detail-item-label flex justify-between">
                  <span>Giọng đọc</span>
                  <span>{bookData?.avgContentRate?.toFixed(1)}</span>
                </div>
                <div className="BookRate-rate-detail-item-progress">
                  <div
                    className="BookRate-rate-detail-item-progress-line"
                    style={{ width: `${((bookData?.avgContentRate || 0) / 5) * 100}%` }}
                  />
                </div>
              </div>

              <div className="BookRate-rate-detail-item">
                <div className="BookRate-rate-detail-item-label flex justify-between">
                  <span>Nội dung</span>
                  <span>{bookData?.avgVoiceRate?.toFixed(1)}</span>
                </div>
                <div className="BookRate-rate-detail-item-progress">
                  <div
                    className="BookRate-rate-detail-item-progress-line"
                    style={{ width: `${((bookData?.avgVoiceRate || 0) / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col span={24} lg={{ span: 6 }}>
            <div className="BookRate-rate-btn flex items-center justify-center">
              <Button title="Viết cảm nhận" onClick={handleOpenBookRateFormModal} disabled={!productState?.is_buy} />
            </div>
          </Col>
        </Row>
      </div>
      {isEmpty ? (
        <Empty title="Không có dữ liệu đánh giá" />
      ) : (
        <div className="BookRate-comments">
          {productRateState?.records?.map((item) => (
            <div key={item._id} className="BookRate-comments-item flex items-start">
              <div className="BookRate-comments-item-avatar">
                <Avatar image={item.user?.avatar} />
              </div>
              <div className="BookRate-comments-item-info">
                <div className="BookRate-comments-item-info-name flex items-center">
                  {item.user?.name}
                  <div className="BookRate-comments-item-info-date">
                    {formatISODateToDateTime(item.createdAt, EFormat.DATE)}
                  </div>
                  <div className="BookRate-comments-item-info-rate">
                    <Rate disabled value={(item.contentStar + item.voiceStar) / 2} />
                  </div>
                </div>

                <div className="BookRate-comments-item-info-content">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="BookRate-pagination">
        <Pagination
          page={getProductRateParamsRequest.page}
          pageSize={getProductRateParamsRequest.pageSize}
          total={productRateState?.total}
          onChange={handlePageChange}
        />
      </div>

      <BookRateForm
        visible={visibleBookRateFormModal}
        onClose={handleCloseBookRateFormModal}
        onSubmit={getProductRate}
      />
    </div>
  );
};

export default BookRate;
