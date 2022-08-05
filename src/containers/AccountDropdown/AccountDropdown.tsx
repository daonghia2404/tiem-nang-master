import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';

import ImageCrown from '@/assets/images/image-crown.svg';
import ImageCoin from '@/assets/images/image-coin.svg';
import Favicon from '@/assets/images/favicon.png';
import BgAccountDropdown from '@/assets/images/bg-account-dropdown.png';
import IconUserCircle from '@/assets/icons/icon-user-circle.svg';
import IconBell from '@/assets/icons/icon-bell.svg';
import IconRefresh from '@/assets/icons/icon-refresh.svg';
import IconShare from '@/assets/icons/icon-share.svg';
import IconLogout from '@/assets/icons/icon-logout.svg';
import { TRootState } from '@/redux/reducers';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import ModalLogout from '@/containers/ModalLogout';

import { TAccountDropdownProps } from './AccountDropdown.types.d';
import './AccountDropdown.scss';

const AccountDropdown: React.FC<TAccountDropdownProps> = ({ visible, onClose }) => {
  const [visibleNotification, setVisibleNotification] = useState<boolean>(false);
  const [visibleModalLogout, setVisibleModalLogout] = useState<boolean>(false);

  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;
  const myMembershipState = useSelector((state: TRootState) => state.membershipReducer.getMyMembershipResponse?.data);

  const handleOpenModalLogout = (): void => {
    onClose?.();
    setVisibleModalLogout(true);
  };

  const handleCloseModalLogout = (): void => {
    setVisibleModalLogout(false);
  };

  const handleNavigate = (link: string): void => {
    navigate(link);
    onClose?.();
  };

  const dataAccountDropdownList = [
    {
      icon: IconUserCircle,
      label: 'Thông tin tài khoản',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.AccountInformation}`),
    },
    { icon: IconBell, label: 'Thông báo', badge: '+5', onClick: (): void => setVisibleNotification(true) },
    { icon: IconRefresh, label: 'Lịch sử giao dịch' },
    { icon: IconShare, label: 'Tiếp thị liên kết' },
    { icon: IconLogout, label: 'Đăng xuất', onClick: handleOpenModalLogout },
  ];

  const handleClickNotifcation = (): void => {
    onClose?.();
    navigate(Paths.NotificationDetail('1'));
  };

  useEffect(() => {
    if (visible) {
      setVisibleNotification(false);
    }
  }, [visible]);

  return (
    <div className="AccountDropdown">
      {visibleNotification ? (
        <div className="AccountDropdown-notification">
          <div className="AccountDropdown-notification-header">
            <div className="AccountDropdown-notification-header-title">Thông báo</div>
          </div>

          <div className="AccountDropdown-notification-body">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="AccountDropdown-notification-body-item flex items-start"
                onClick={(): void => handleClickNotifcation()}
              >
                <div className="AccountDropdown-notification-body-item-icon">
                  <img src={Favicon} alt="" />
                </div>

                <div className="AccountDropdown-notification-body-item-info">
                  <div className="AccountDropdown-notification-body-item-info-title">Mừng đại lễ 30/4 - 01/05</div>
                  <div className="AccountDropdown-notification-body-item-info-description">
                    Tri ân khách hàng. Chúng tôi xin chúc quý khách kì nghỉ lễ vui vẻ
                  </div>
                </div>

                <div className="AccountDropdown-notification-body-item-arrow">
                  <Icon name={EIconName.AngleRight} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="AccountDropdown-account">
          <div className="AccountDropdown-header">
            <div className="AccountDropdown-header-bg">
              <img src={BgAccountDropdown} alt="" />
            </div>
            <div className="AccountDropdown-header-info flex items-center">
              <div className="AccountDropdown-header-info-avatar">
                <Avatar image={profileState?.avatar} />
              </div>
              <div className="AccountDropdown-header-info-content">
                <div className="AccountDropdown-header-info-content-name">{profileState?.name}</div>
                <div
                  className="AccountDropdown-header-info-content-rank flex items-center"
                  onClick={(): void => handleNavigate(Paths.Member)}
                >
                  <div className="AccountDropdown-header-info-content-rank-icon">
                    <img src={ImageCrown} alt="" />
                  </div>
                  <div className="AccountDropdown-header-info-content-rank-label">{myMembershipState?.name}</div>
                  <div className="AccountDropdown-header-info-content-rank-arrow">
                    <Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />
                  </div>
                </div>
              </div>
            </div>

            <div className="AccountDropdown-header-wallet flex items-center justify-between">
              <div className="AccountDropdown-header-wallet-item">
                <div className="AccountDropdown-header-wallet-item-title">Ví của tôi</div>
                <div className="AccountDropdown-header-wallet-item-coin flex items-center">
                  <div className="AccountDropdown-header-wallet-item-coin-icon">
                    <img src={ImageCoin} alt="" />
                  </div>
                  <div className="AccountDropdown-header-wallet-item-coin-value">
                    {profileState?.bcoin}
                    <span>BCoin</span>
                  </div>
                </div>
              </div>
              <div className="AccountDropdown-header-wallet-item">
                <Button title="Nạp ngay" />
              </div>
            </div>
          </div>

          <div className="AccountDropdown-list">
            {dataAccountDropdownList.map((item, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="AccountDropdown-list-item flex items-center justify-between"
                onClick={item.onClick}
              >
                <div className="AccountDropdown-list-item-icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="AccountDropdown-list-item-label">{item.label}</div>
                {item.badge && <div className="AccountDropdown-list-item-badge">{item.badge}</div>}
                <div className="AccountDropdown-list-item-arrow">
                  <Icon name={EIconName.AngleRight} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ModalLogout visible={visibleModalLogout} onClose={handleCloseModalLogout} />
    </div>
  );
};

export default AccountDropdown;
