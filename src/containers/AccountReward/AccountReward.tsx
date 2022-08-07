/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect } from 'react';
import { Collapse } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import BgAccountDropdown from '@/assets/images/bg-account-dropdown.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageCrown from '@/assets/images/image-crown.svg';
import { TRootState } from '@/redux/reducers';
import { DEFAULT_PAGE } from '@/common/constants';
import { EGetAppellationAction, getAppellationAction, getMyAppellationAction } from '@/redux/actions';

import { TAccountRewardProps } from './AccountReward.types.d';
import './AccountReward.scss';

const { Panel } = Collapse;

const AccountReward: React.FC<TAccountRewardProps> = () => {
  const dispatch = useDispatch();
  const appellationListState = useSelector(
    (state: TRootState) => state.appellationReducer.getAppellationResponse?.data.records,
  );
  const myAppellationState = useSelector(
    (state: TRootState) => state.appellationReducer.getMyAppellationResponse?.data,
  );

  const getAppellationLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetAppellationAction.GET_APPELLATION],
  );

  const nextLevel = appellationListState?.[0]?._id || 0;

  const renderListRewards = (data: React.ReactNode[]): React.ReactElement => {
    return (
      <div className="AccountReward-list-wrapper">
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="AccountReward-list-item flex items-start">
            <div className="AccountReward-list-item-icon">
              <img src={ImageCrown} alt="" />
            </div>
            <div className="AccountReward-list-item-label">{item}</div>
          </div>
        ))}
      </div>
    );
  };

  const dataRewardLevels = appellationListState?.map((item) => ({
    key: item._id,
    title: item.name,
    remain: '',
    description: renderListRewards([
      <>
        Thăng bậc <strong>{item.name}</strong> sau khi hoàn tất {item.bookRequired} tâm sách!
      </>,
      `Nhận ${item.bcoinOfLevel} Bcoin khi đạt được danh hiệu này`,
      `Nhận thưởng ${item.giftPerBook} Bcoin vào Ví sau khi hoàn tất 1 tâm sách!`,
    ]),
  }));

  const getMyAppellation = useCallback(() => {
    dispatch(getMyAppellationAction.request({}));
  }, [dispatch]);

  const getAppellationList = useCallback(() => {
    const params = {
      page: DEFAULT_PAGE,
      pageSize: 100,
      keyword: '',
    };

    dispatch(getAppellationAction.request({ params }));
  }, [dispatch]);

  useEffect(() => {
    getMyAppellation();
  }, [getMyAppellation]);

  useEffect(() => {
    getAppellationList();
  }, [getAppellationList]);

  return (
    <div className="AccountReward">
      <div className="AccountReward-header">
        <div className="AccountReward-header-bg">
          <img src={BgAccountDropdown} alt="" />
        </div>
        <div className="AccountReward-header-info flex justify-between">
          <div className="AccountReward-header-info-item">
            <div className="AccountReward-header-info-item-subtitle">Danh hiệu</div>
            <div className="AccountReward-header-info-item-title">{myAppellationState?.name}</div>
          </div>
          <div className="AccountReward-header-info-item">
            <div className="AccountReward-header-info-item-subtitle">Tên thành viên</div>
            <div className="AccountReward-header-info-item-name">{myAppellationState?.username}</div>
          </div>
        </div>

        <div className="AccountReward-header-progress-wrapper">
          <div className="AccountReward-header-progress">
            <div
              className="AccountReward-header-progress-line"
              style={{
                width: `${
                  ((myAppellationState?.myBook || 0) / (myAppellationState?.myBookRequireForUpAppellation || 1)) * 100
                }%`,
              }}
            />
          </div>

          <div className="AccountReward-header-progress-description flex justify-between">
            <div className="AccountReward-header-progress-description-label flex items-center">
              <Icon name={EIconName.Info} color={EIconColor.WHITE} />
              “Đọc Tâm sách - Thưởng Bookcoin!”
            </div>
            <div className="AccountReward-header-progress-description-value">
              {myAppellationState?.myBook}/{myAppellationState?.myBookRequireForUpAppellation}
            </div>
          </div>
        </div>
      </div>

      {!getAppellationLoading && (
        <div className="AccountReward-body">
          <Collapse
            defaultActiveKey={[nextLevel]}
            expandIcon={({ isActive }): React.ReactNode => (
              <div style={{ transform: `rotate(${isActive ? 90 : 0}deg)` }}>
                <Icon name={EIconName.AngleRight} />
              </div>
            )}
            expandIconPosition="right"
          >
            {dataRewardLevels?.map((item) => (
              <Panel key={item.key} header={item.title}>
                {item.description}
              </Panel>
            ))}
          </Collapse>
        </div>
      )}
    </div>
  );
};

export default AccountReward;
