/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { navigate, useLocation } from '@reach/router';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import IconUserCircle from '@/assets/icons/icon-user-circle.svg';
import IconBell from '@/assets/icons/icon-bell.svg';
import IconRefresh from '@/assets/icons/icon-refresh.svg';
import IconShare from '@/assets/icons/icon-share.svg';
import IconLogout from '@/assets/icons/icon-logout.svg';
import { LayoutPaths, Paths } from '@/pages/routers';
import Icon, { EIconName } from '@/components/Icon';
import BgAccountDropdown from '@/assets/images/bg-account-dropdown.png';
import ImageCoin from '@/assets/images/image-coin.svg';
import Button from '@/components/Button';
import PaymentMethodModal from '@/containers/PaymentMethodModal';
import { TRootState } from '@/redux/reducers';
import ModalLogout from '@/containers/ModalLogout';

import { TMyAccountProps } from './MyAccount.types.d';
import './MyAccount.scss';

const MyAccount: React.FC<TMyAccountProps> = () => {
  const { pathname } = useLocation();
  const [visiblePaymentMethodModal, setVisiblePaymentMethodModal] = useState<boolean>(false);
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;

  const getNotificationsUnread = useSelector(
    (state: TRootState) => state.notificationReducer.getNotificationsUnreadResponse?.data,
  );

  const handleNavigate = (link: string): void => {
    navigate(link);
  };

  const [visibleModalLogout, setVisibleModalLogout] = useState<boolean>(false);

  const handleOpenModalLogout = (): void => {
    setVisibleModalLogout(true);
  };

  const handleCloseModalLogout = (): void => {
    setVisibleModalLogout(false);
  };

  const showNotificationTotal = (): string | undefined => {
    if (getNotificationsUnread) {
      if (getNotificationsUnread > 99) return `+99`;
      return `${getNotificationsUnread}`;
    }
    return undefined;
  };

  const dataMyAccountDropdownList = [
    {
      activePaths: [`${LayoutPaths.Admin}${Paths.AccountInformation}`],
      icon: IconUserCircle,
      label: 'Thông tin tài khoản',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.AccountInformation}`),
    },
    {
      icon: IconBell,
      label: 'Thông báo',
      badge: showNotificationTotal(),
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.Notifications}`),
    },
    {
      activePaths: [`${LayoutPaths.Admin}${Paths.HistoryTranscation}`],
      icon: IconRefresh,
      label: 'Lịch sử giao dịch',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.HistoryTranscation}`),
    },
    {
      activePaths: [`${LayoutPaths.Admin}${Paths.AffiliateMarketing}`],
      icon: IconShare,
      label: 'Tiếp thị liên kết',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.AffiliateMarketing}`),
    },
    { icon: IconLogout, label: 'Đăng xuất', onClick: handleOpenModalLogout },
  ];

  const handleOpenPaymentMethodModal = (): void => {
    setVisiblePaymentMethodModal(true);
  };
  const handleClosePaymentMethodModal = (): void => {
    setVisiblePaymentMethodModal(false);
  };

  return (
    <div className="MyAccount">
      <div className="MyAccount-header">Tài khoản của tôi</div>
      <div className="MyAccount-list">
        {dataMyAccountDropdownList.map((item, index) => (
          <div key={index}>
            <div
              className={classNames('MyAccount-list-item flex items-center justify-between', {
                active: item.activePaths?.includes(pathname),
              })}
              onClick={item.onClick}
            >
              <div className="MyAccount-list-item-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="MyAccount-list-item-label">{item.label}</div>
              {item.badge && <div className="MyAccount-list-item-badge">{item.badge}</div>}
              <div className="MyAccount-list-item-arrow">
                <Icon name={EIconName.AngleRight} />
              </div>
            </div>
            {index === 0 && (
              <div className="MyAccount-wallet flex items-center justify-between">
                <div className="MyAccount-wallet-bg">
                  <img src={BgAccountDropdown} alt="" />
                </div>
                <div className="MyAccount-wallet-item">
                  <div className="MyAccount-wallet-item-title">Ví của tôi</div>
                  <div className="MyAccount-wallet-item-coin flex items-center">
                    <div className="MyAccount-wallet-item-coin-icon">
                      <img src={ImageCoin} alt="" />
                    </div>
                    <div className="MyAccount-wallet-item-coin-value">
                      {profileState?.bcoin}
                      <span>BCoin</span>
                    </div>
                  </div>
                </div>
                <div className="MyAccount-wallet-item">
                  <Button title="Nạp ngay" onClick={handleOpenPaymentMethodModal} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <PaymentMethodModal visible={visiblePaymentMethodModal} onClose={handleClosePaymentMethodModal} />
      <ModalLogout visible={visibleModalLogout} onClose={handleCloseModalLogout} />
    </div>
  );
};

export default MyAccount;
