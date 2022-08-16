/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

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
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getNotificationsAction, getNotificationsUnreadAction } from '@/redux/actions';
import { TGetNotificationsResponse, TNotification } from '@/services/api';
import WrapperLazyLoad from '@/components/WrapperLazyLoad';
import { getTotalPage } from '@/utils/functions';
import { readNotificationAction } from '@/redux/actions/notification/read-notification';
import PaymentMethodModal from '@/containers/PaymentMethodModal';
import Empty from '@/components/Empty';

import { TAccountDropdownProps } from './AccountDropdown.types.d';
import './AccountDropdown.scss';

const AccountDropdown: React.FC<TAccountDropdownProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch();

  const [visibleNotification, setVisibleNotification] = useState<boolean>(false);
  const [visibleModalLogout, setVisibleModalLogout] = useState<boolean>(false);
  const [visiblePaymentMethodModal, setVisiblePaymentMethodModal] = useState<boolean>(false);

  const [getNotificationsParamsRequest, setGetNotificationsParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const [notifications, setNotifications] = useState<TNotification[]>([]);
  const [notificationTotal, setNotificationTotal] = useState<number>(0);
  const isEmpty = notifications.length === 0;

  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse)?.data;
  const myMembershipState = useSelector((state: TRootState) => state.membershipReducer.getMyMembershipResponse?.data);

  const getNotificationsUnread = useSelector(
    (state: TRootState) => state.notificationReducer.getNotificationsUnreadResponse?.data,
  );

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

  const showNotificationTotal = (): string | undefined => {
    if (getNotificationsUnread) {
      if (getNotificationsUnread > 99) return `+99`;
      return `${getNotificationsUnread}`;
    }
    return undefined;
  };

  const dataAccountDropdownList = [
    {
      icon: IconUserCircle,
      label: 'Thông tin tài khoản',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.AccountInformation}`),
    },
    {
      icon: IconBell,
      label: 'Thông báo',
      badge: showNotificationTotal(),
      onClick: (): void => setVisibleNotification(true),
    },
    {
      icon: IconRefresh,
      label: 'Lịch sử giao dịch',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.HistoryTranscation}`),
    },
    {
      icon: IconShare,
      label: 'Tiếp thị liên kết',
      onClick: (): void => handleNavigate(`${LayoutPaths.Admin}${Paths.AffiliateMarketing}`),
    },
    { icon: IconLogout, label: 'Đăng xuất', onClick: handleOpenModalLogout },
  ];

  const handleClickNotifcation = (data: TNotification): void => {
    const body = {
      id: data._id,
    };
    onClose?.();
    dispatch(
      readNotificationAction.request({ body }, (): void => {
        dispatch(getNotificationsUnreadAction.request({}));
      }),
    );
  };

  const handleLoadMoreNotification = (): void => {
    const isLoadMore =
      getNotificationsParamsRequest.page < getTotalPage(notificationTotal, getNotificationsParamsRequest.pageSize);

    if (isLoadMore) {
      setGetNotificationsParamsRequest({
        ...getNotificationsParamsRequest,
        page: getNotificationsParamsRequest.page + 1,
      });
    }
  };

  const handleOpenPaymentMethodModal = (): void => {
    onClose?.();
    setVisiblePaymentMethodModal(true);
  };
  const handleClosePaymentMethodModal = (): void => {
    onClose?.();
    setVisiblePaymentMethodModal(false);
  };

  useEffect(() => {
    dispatch(
      getNotificationsAction.request(
        { params: getNotificationsParamsRequest },
        (response: TGetNotificationsResponse): void => {
          const isFirstFetching = getNotificationsParamsRequest.page === DEFAULT_PAGE;
          const data = response?.data?.records;
          setNotificationTotal(response?.data?.total);
          setNotifications(isFirstFetching ? data : [...notifications, ...data]);
        },
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getNotificationsParamsRequest]);

  useEffect(() => {
    if (visible) {
      setVisibleNotification(false);
    }
  }, [visible]);

  useEffect(() => {
    if (visibleNotification) {
      setGetNotificationsParamsRequest({
        page: DEFAULT_PAGE,
        pageSize: DEFAULT_PAGE_SIZE,
      });
    }
  }, [visibleNotification]);

  return (
    <div className="AccountDropdown">
      {visibleNotification ? (
        <div className="AccountDropdown-notification">
          <div className="AccountDropdown-notification-header">
            <div className="AccountDropdown-notification-header-title">Thông báo</div>
          </div>

          {isEmpty ? (
            <Empty title="Không có dữ liệu thông báo" />
          ) : (
            <div className="AccountDropdown-notification-body">
              <WrapperLazyLoad maxHeight={400} onEnd={handleLoadMoreNotification}>
                {notifications.map((item) => (
                  <div
                    key={item._id}
                    className="AccountDropdown-notification-body-item flex items-start"
                    onClick={(): void => handleClickNotifcation(item)}
                  >
                    <div className="AccountDropdown-notification-body-item-icon">
                      <img src={Favicon} alt="" />
                    </div>
                    {!item.isRead && <div className="AccountDropdown-notification-body-item-unread" />}

                    <div className="AccountDropdown-notification-body-item-info">
                      <div className="AccountDropdown-notification-body-item-info-title">{item.title}</div>
                      <div className="AccountDropdown-notification-body-item-info-description">{item.description}</div>
                    </div>

                    <div className="AccountDropdown-notification-body-item-arrow">
                      <Icon name={EIconName.AngleRight} />
                    </div>
                  </div>
                ))}
              </WrapperLazyLoad>
            </div>
          )}
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
                <Button title="Nạp ngay" onClick={handleOpenPaymentMethodModal} />
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

      <PaymentMethodModal visible={visiblePaymentMethodModal} onClose={handleClosePaymentMethodModal} />
      <ModalLogout visible={visibleModalLogout} onClose={handleCloseModalLogout} />
    </div>
  );
};

export default AccountDropdown;
