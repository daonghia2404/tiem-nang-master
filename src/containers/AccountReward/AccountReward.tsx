import React, { useCallback, useEffect } from 'react';
import { Collapse } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import BgAccountDropdown from '@/assets/images/bg-account-dropdown.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageCrown from '@/assets/images/image-crown.svg';
import { TRootState } from '@/redux/reducers';
import { DEFAULT_PAGE } from '@/common/constants';
import { EGetMembershipListAction, getMembershipListAction } from '@/redux/actions';

import { TAccountRewardProps } from './AccountReward.types.d';
import './AccountReward.scss';

const { Panel } = Collapse;

const AccountReward: React.FC<TAccountRewardProps> = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);
  const myMembershipState = useSelector((state: TRootState) => state.membershipReducer.getMyMembershipResponse?.data);

  const getMembershipListState = useSelector(
    (state: TRootState) => state.membershipReducer.getMembershipListResponse?.data?.records,
  );
  const getMembershipListLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetMembershipListAction.GET_MEMBERSHIP_LIST],
  );

  const currentLevel = myMembershipState?.level || 0;

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

  const dataRewardLevels = getMembershipListState?.map((item) => ({
    key: item.level,
    title: item.name,
    remain: '',
    description: renderListRewards([
      <>
        Thăng bậc <strong>{item.name}</strong> nhận FREE {item.book_for_free} tâm sách!
      </>,
    ]),
  }));

  const getMembershipList = useCallback(() => {
    const params = {
      page: DEFAULT_PAGE,
      pageSize: 100,
      keyword: '',
    };

    dispatch(getMembershipListAction.request({ params }));
  }, [dispatch]);

  useEffect(() => {
    getMembershipList();
  }, [getMembershipList]);

  return (
    <div className="AccountReward">
      <div className="AccountReward-header">
        <div className="AccountReward-header-bg">
          <img src={BgAccountDropdown} alt="" />
        </div>
        <div className="AccountReward-header-info flex justify-between">
          <div className="AccountReward-header-info-item">
            <div className="AccountReward-header-info-item-subtitle">Danh hiệu</div>
            <div className="AccountReward-header-info-item-title">{myMembershipState?.name}</div>
          </div>
          <div className="AccountReward-header-info-item">
            <div className="AccountReward-header-info-item-subtitle">Tên thành viên</div>
            <div className="AccountReward-header-info-item-name">{profileState?.name}</div>
          </div>
        </div>

        <div className="AccountReward-header-progress-wrapper">
          <div className="AccountReward-header-progress">
            <div className="AccountReward-header-progress-line" style={{ width: '60%' }} />
          </div>

          <div className="AccountReward-header-progress-description flex justify-between">
            <div className="AccountReward-header-progress-description-label flex items-center">
              <Icon name={EIconName.Info} color={EIconColor.WHITE} />
              “Đọc Tâm sách - Thưởng Bookcoin!”
            </div>
            <div className="AccountReward-header-progress-description-value">21/50</div>
          </div>
        </div>
      </div>

      {!getMembershipListLoading && (
        <div className="AccountReward-body">
          <Collapse
            defaultActiveKey={[currentLevel ? currentLevel + 1 : 1]}
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
