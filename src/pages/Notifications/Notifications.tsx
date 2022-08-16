/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Favicon from '@/assets/images/favicon.png';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import Icon, { EIconName } from '@/components/Icon';
import { readNotificationAction, getNotificationsUnreadAction, getNotificationsAction } from '@/redux/actions';
import { TGetNotificationsResponse, TNotification } from '@/services/api';
import Empty from '@/components/Empty';
import Pagination from '@/components/Pagination';
import { scrollToTop } from '@/utils/functions';

import './Notifications.scss';

const Notifications: React.FC = () => {
  const dispatch = useDispatch();

  const [getNotificationsParamsRequest, setGetNotificationsParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const [notifications, setNotifications] = useState<TNotification[]>([]);
  const [notificationTotal, setNotificationTotal] = useState<number>(0);
  const isEmpty = notifications.length === 0;

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetNotificationsParamsRequest({
      ...getNotificationsParamsRequest,
      page,
      pageSize: pageSize || getNotificationsParamsRequest.pageSize,
    });
    scrollToTop();
  };

  const handleClickNotifcation = (data: TNotification): void => {
    const body = {
      id: data._id,
    };
    dispatch(
      readNotificationAction.request({ body }, (): void => {
        dispatch(getNotificationsUnreadAction.request({}));
      }),
    );
  };

  useEffect(() => {
    dispatch(
      getNotificationsAction.request(
        { params: getNotificationsParamsRequest },
        (response: TGetNotificationsResponse): void => {
          const data = response?.data?.records;
          setNotificationTotal(response?.data?.total);
          setNotifications(data);
        },
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getNotificationsParamsRequest]);

  return (
    <div className="Notifications">
      <div className="Notifications-wrapper">
        <div className="AccountDropdown-notification">
          <div className="AccountDropdown-notification-header">
            <div className="AccountDropdown-notification-header-title">Thông báo</div>
          </div>

          {isEmpty ? (
            <Empty title="Không có dữ liệu thông báo" />
          ) : (
            <div className="AccountDropdown-notification-body">
              {notifications?.map((item) => (
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
            </div>
          )}
        </div>
      </div>

      <div className="Notifications-pagination flex justify-end">
        <Pagination
          page={getNotificationsParamsRequest.page}
          pageSize={getNotificationsParamsRequest.pageSize}
          total={notificationTotal}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Notifications;
