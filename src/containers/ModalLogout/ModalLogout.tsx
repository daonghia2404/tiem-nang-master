import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import ModalConfirm from '@/containers/ModalConfirm';
import Helpers from '@/services/helpers';
import { authLogoutAction, EAuthLogoutAction, getProfileAction, uiActions } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';

import { TModalLogoutProps } from './ModalLogout.types.d';
import './ModalLogout.scss';

const ModalLogout: React.FC<TModalLogoutProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const authLogoutLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthLogoutAction.AUTH_LOGOUT]);

  const handleLogout = (): void => {
    dispatch(authLogoutAction.request({}, handleAuthLogoutSuccess));
  };

  const handleAuthLogoutSuccess = (): void => {
    Helpers.clearTokens();
    dispatch(getProfileAction.success(undefined));
    dispatch(uiActions.setAudio({ visible: false }));
    navigate(Paths.BooksLibrary);
    onClose?.();
  };
  return (
    <ModalConfirm
      visible={visible}
      title="Đăng xuất"
      text="Bạn thực sự muốn đăng xuất tài khoản khỏi phiên đăng nhập lần này ?"
      onClose={onClose}
      onSubmit={handleLogout}
      loading={authLogoutLoading}
    />
  );
};

export default ModalLogout;
