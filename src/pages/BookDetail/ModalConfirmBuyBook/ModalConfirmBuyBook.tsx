import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import { TRootState } from '@/redux/reducers';
import { buyProductAction, EBuyProductAction, getMyMembershipAction, getProfileAction } from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import ModalConfirm from '@/containers/ModalConfirm';
import { ETransactionType } from '@/services/api';

import { TModalConfirmBuyBookProps } from './ModalConfirmBuyBook.types';

const ModalConfirmBuyBook: React.FC<TModalConfirmBuyBookProps> = ({ visible, payment_type, onClose, onSubmit }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isUseWallet = payment_type === ETransactionType.BUY_USE_WALLET;

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const buyProductLoading = useSelector((state: TRootState) => state.loadingReducer[EBuyProductAction.BUY_PRODUCT]);
  const bookData = productState?.book;

  const handleBuyBook = (): void => {
    const body = {
      payment_type,
    };
    dispatch(buyProductAction.request({ paths: { id }, body }, handleBuyBookSuccess));
  };

  const handleBuyBookSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Mua tâm sách thành công');
    getProfile();
    getMyMembership();
    onClose?.();
    onSubmit?.();
  };

  const getMyMembership = useCallback(() => {
    dispatch(getMyMembershipAction.request({}));
  }, [dispatch]);

  const getProfile = useCallback(() => {
    dispatch(getProfileAction.request({}));
  }, [dispatch]);

  return (
    <ModalConfirm
      visible={visible}
      onClose={onClose}
      onSubmit={handleBuyBook}
      loading={buyProductLoading}
      title="Xác nhận thanh toán"
      text={
        isUseWallet ? (
          <>
            <strong>{bookData?.name} </strong>
            <span>
              <strong>
                <big>{bookData?.price}</big>
              </strong>
              <small>Bcoin</small>
            </span>
          </>
        ) : (
          <>
            Đổi {` `}
            <strong>{bookData?.name}</strong>
            bằng một lượt sử dụng {` `}
            <span>
              <strong>
                <big>Thẻ Hội Viên</big>
              </strong>
            </span>
          </>
        )
      }
    />
  );
};

export default ModalConfirmBuyBook;
