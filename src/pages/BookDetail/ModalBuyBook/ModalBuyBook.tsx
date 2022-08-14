import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import ModalConfirm from '@/containers/ModalConfirm';
import { TRootState } from '@/redux/reducers';
import { buyProductAction, EBuyProductAction, getProfileAction } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

import { TModalBuyBookProps } from './ModalBuyBook.types';
import './ModalBuyBook.scss';

const ModalBuyBook: React.FC<TModalBuyBookProps> = ({ visible, onClose, onSubmit }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;
  const buyProductLoading = useSelector((state: TRootState) => state.loadingReducer[EBuyProductAction.BUY_PRODUCT]);

  const handleBuyBook = (): void => {
    const body = {
      payment_type: 'BUY_USE_CARD',
    };
    dispatch(buyProductAction.request({ paths: { id }, body }, handleBuyBookSuccess));
  };

  const handleBuyBookSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Mua tâm sách thành công');
    getProfile();
    onClose?.();
    onSubmit?.();
  };

  const getProfile = useCallback(() => {
    dispatch(getProfileAction.request({}));
  }, [dispatch]);

  return (
    <ModalConfirm
      visible={visible}
      onClose={onClose}
      onSubmit={handleBuyBook}
      title="Mua sách"
      loading={buyProductLoading}
      text={
        <>
          Bạn có chắc chắn mua tâm sách <strong>{bookData?.name}</strong> với giá <span>{bookData?.price} Bcoin</span>{' '}
          không?{' '}
        </>
      }
    />
  );
};

export default ModalBuyBook;
