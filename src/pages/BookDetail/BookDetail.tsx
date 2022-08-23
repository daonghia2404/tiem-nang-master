/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { navigate, useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Rate from '@/components/Rate';
import ImageCoin from '@/assets/images/image-coin.svg';
import ImageBook from '@/assets/images/image-book.svg';
import IconList from '@/assets/icons/icon-list.svg';
import Button from '@/components/Button';
import BookRate from '@/containers/BookRate';
import {
  ESaveProductAction,
  EUnsaveProductAction,
  getProductAction,
  saveProductAction,
  uiActions,
  unsaveProductAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import Carousels from '@/components/Carousels';
import ChapterCard from '@/components/ChapterCard';
import ModalBuyBook from '@/pages/BookDetail/ModalBuyBook';
import { Paths } from '@/pages/routers';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { EIconColor, EIconName } from '@/components/Icon';
import Helper from '@/services/helpers';
import { TProductVoice } from '@/common/models';
import ModalConfirmBuyBook from '@/pages/BookDetail/ModalConfirmBuyBook';
import { ETransactionType } from '@/services/api';

import './BookDetail.scss';

const BookDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const atk = Helper.getAccessToken();

  const [visibleModalBuyBook, setVisibleModalBuyBook] = useState<boolean>(false);
  const [modalConfirmBuyBook, setModalConfirmBuyBook] = useState<{
    visible: boolean;
    payment_type?: ETransactionType;
  }>({
    visible: false,
  });

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  const bookData = productState?.book;
  const isBoughtBook = productState?.is_buy;
  const isSavedBook = productState?.is_save;
  const isShowChapter = bookData?.voice && bookData?.voice?.length > 0;

  const audioState = useSelector((state: TRootState) => state.uiReducer.audio);
  const voice = audioState?.voice;
  const isAudioPlay = audioState?.isAudioPlay;
  const isAudioLoading = audioState?.isAudioLoading;

  const saveProductLoading = useSelector((state: TRootState) => state.loadingReducer[ESaveProductAction.SAVE_PRODUCT]);
  const unsaveProductLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUnsaveProductAction.UNSAVE_PRODUCT],
  );
  const savedProductLoading = saveProductLoading || unsaveProductLoading;

  const handleOpenBuyBookModal = (forward?: boolean): void => {
    if (atk) {
      if (!forward) showNotification(ETypeNotification.ERROR, 'Bạn phải thanh toán sách để thực hiện hành động này');
      setVisibleModalBuyBook(true);
    } else {
      dispatch(uiActions.toggleModalAuth(true));
      showNotification(ETypeNotification.ERROR, 'Bạn phải đăng nhập để thực hiện hành động này');
    }
  };

  const handleCloseBuyBookModal = (): void => {
    setVisibleModalBuyBook(false);
  };

  const handleSubmitBuyBookModal = (values: { payment_type: ETransactionType }): void => {
    handleCloseBuyBookModal();
    handleOpenModalConfirmBuyBook(values.payment_type);
  };

  const handleOpenModalConfirmBuyBook = (payment_type: ETransactionType): void => {
    setModalConfirmBuyBook({
      visible: true,
      payment_type,
    });
  };

  const handleCloseModalConfirmBuyBook = (): void => {
    setModalConfirmBuyBook({
      visible: false,
    });
  };

  const handleSavedBook = (): void => {
    if (atk) {
      if (isSavedBook) {
        dispatch(unsaveProductAction.request({ paths: { id } }, handleSavedBookSuccess));
      } else {
        dispatch(saveProductAction.request({ paths: { id } }, handleSavedBookSuccess));
      }
    } else {
      dispatch(uiActions.toggleModalAuth(true));
      showNotification(ETypeNotification.ERROR, 'Bạn phải đăng nhập để thực hiện hành động này');
    }
  };

  const handleSavedBookSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${isSavedBook ? 'Bỏ lưu' : 'Lưu'} tâm sách thành công`);
    getProduct();
  };

  const handleClickChapter = (data: TProductVoice): void => {
    if (voice?._id !== data._id) {
      dispatch(uiActions.setAudio({ voice: data }));
    }
    dispatch(uiActions.setAudio({ visible: true, productState, isAudioPlay: true }));
    navigate(Paths.BookReader(bookData?.slug, bookData?._id));
  };

  const getProduct = useCallback(() => {
    if (id) dispatch(getProductAction.request({ paths: { id } }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, profileState, dispatch]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className="BookDetail">
      <div className="container">
        <div className="BookDetail-wrapper">
          <Row gutter={[40, 24]}>
            <Col span={24} lg={{ span: 12 }}>
              <div className="BookDetail-image">
                <Carousels arrows={false} dots={false} slidesToShow={1} infinite autoplay>
                  {bookData?.images?.map((item) => (
                    <div>
                      <div key={item} className="BookDetail-image-item">
                        <img src={item} alt="" />
                      </div>
                    </div>
                  ))}
                </Carousels>
              </div>
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <div className="BookDetail-info">
                <div className="BookDetail-info-title">{bookData?.name}</div>
                <Row justify="space-between" align="middle">
                  <Col>
                    <div className="BookDetail-info-author">{bookData?.author?.name}</div>
                  </Col>

                  <Col>
                    <div className="BookDetail-info-rate flex items-center">
                      {(((bookData?.avgContentRate || 0) + (bookData?.avgVoiceRate || 0)) / 2)?.toFixed(1)}
                      <Rate value={((bookData?.avgContentRate || 0) + (bookData?.avgVoiceRate || 0)) / 2} disabled />
                    </div>
                  </Col>
                </Row>

                <div className="BookDetail-info-price flex items-center">
                  <img src={ImageCoin} alt="" />
                  <strong>{bookData?.price}</strong>BCoin
                  {bookData?.prePrice && bookData?.prePrice !== bookData.price && (
                    <del>
                      <strong>{bookData?.prePrice}</strong>Bcoin
                    </del>
                  )}
                </div>

                <div className="BookDetail-info-title flex items-center">
                  <img src={ImageBook} alt="" />
                  Về sách & tác giả
                </div>

                <div className="BookDetail-info-content">{bookData?.description}</div>
                <div className="BookDetail-info-btn">
                  <Row gutter={[12, 12]}>
                    <Col span={12}>
                      {isBoughtBook ? (
                        <Button
                          type="primary"
                          title="Đọc sách"
                          link={Paths.BookReader(bookData?.slug, bookData?._id)}
                        />
                      ) : (
                        <Button type="default" title="Thanh toán" onClick={(): void => handleOpenBuyBookModal(true)} />
                      )}
                    </Col>
                    <Col span={12}>
                      <Button
                        iconName={isSavedBook ? EIconName.Unsaved : EIconName.Saved}
                        iconColor={isSavedBook ? EIconColor.BLACK : EIconColor.WHITE}
                        type={isSavedBook ? 'default' : 'primary'}
                        title={isSavedBook ? 'Bỏ lưu tâm sách' : 'Lưu tâm sách'}
                        onClick={handleSavedBook}
                        loading={savedProductLoading}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="BookDetail-wrapper-content">
        <div className="container">
          <Row>
            {isShowChapter && (
              <Col span={24}>
                <div className="BookDetail-card">
                  <div className="BookDetail-card-header flex items-center">
                    <img src={IconList} alt="" />
                    Danh sách chương
                  </div>

                  <div className="BookDetail-card-body">
                    <div className="BookDetail-chapter">
                      {bookData?.voice?.map((item, index) => (
                        <ChapterCard
                          key={item._id}
                          {...item}
                          {...item}
                          isActive={index === 0 || isBoughtBook}
                          isAudioPlay={isAudioPlay && item._id === voice?._id}
                          isAudioLoading={isAudioLoading && item._id === voice?._id}
                          isPlayed={audioState.visible && item._id === voice?._id}
                          onClick={(): void => handleClickChapter?.(item)}
                          onBuyBook={(): void => handleOpenBuyBookModal()}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            )}

            <Col span={24}>
              <div className="BookDetail-card">
                <div className="BookDetail-card-header flex items-center">
                  <img src={IconList} alt="" />
                  Đánh giá & nhận xét
                </div>

                <div className="BookDetail-card-body">
                  <BookRate />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <ModalBuyBook
        visible={visibleModalBuyBook}
        onClose={handleCloseBuyBookModal}
        onSubmit={handleSubmitBuyBookModal}
      />

      <ModalConfirmBuyBook
        {...modalConfirmBuyBook}
        onClose={handleCloseModalConfirmBuyBook}
        onSubmit={(): void => {
          getProduct();
          handleCloseBuyBookModal();
        }}
      />
    </div>
  );
};

export default BookDetail;
