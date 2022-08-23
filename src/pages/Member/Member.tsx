/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Collapse, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import MemberCard from '@/pages/Member/MemberCard';
import Icon, { EIconName } from '@/components/Icon';
import ImageCrown from '@/assets/images/image-crown.svg';
import ModalConfirm from '@/containers/ModalConfirm';
import Button from '@/components/Button';
import { DEFAULT_PAGE } from '@/common/constants';
import {
  EGetMembershipListAction,
  EUpdradeMyMembershipAction,
  getMembershipListAction,
  getMyMembershipAction,
  getProfileAction,
  updradeMyMembershipAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TMembershipList } from '@/services/api';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

import './Member.scss';

const { Panel } = Collapse;

const Member: React.FC = () => {
  const dispatch = useDispatch();
  const [levelUpRankModalState, setLevelUpRankModalState] = useState<{
    visible: boolean;
    data?: TMembershipList;
  }>({
    visible: false,
  });

  const getMembershipListState = useSelector(
    (state: TRootState) => state.membershipReducer.getMembershipListResponse?.data?.records,
  );
  const myMembershipState = useSelector((state: TRootState) => state.membershipReducer.getMyMembershipResponse?.data);
  const updradeMyMembershipLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUpdradeMyMembershipAction.UPDRADE_MY_MEMBERSHIP],
  );
  const getMembershipListLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetMembershipListAction.GET_MEMBERSHIP_LIST],
  );
  const currentLevel = myMembershipState?.level || 0;
  const nextLevel = getMembershipListState?.find((item) => item.level === currentLevel + 1);

  const handleCloseLevelUpRankModal = (): void => {
    setLevelUpRankModalState({ visible: false });
  };

  const handleClickLeveUpBtn = (): void => {
    setLevelUpRankModalState({ visible: true, data: nextLevel });
  };

  const handleSubmitLevelUpRankModal = (): void => {
    const body = {
      mid: levelUpRankModalState.data?._id,
    };
    dispatch(updradeMyMembershipAction.request({ body }, handleUpdradeMyMembershipSuccess));
  };

  const handleUpdradeMyMembershipSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Thăng hạng thành viên thành công');
    getMyMembership();
    getMembershipList();
    getProfile();
    handleCloseLevelUpRankModal();
  };

  const renderDefaultActiveKey = (): number => {
    switch (true) {
      case !currentLevel:
        return 1;
      case currentLevel === dataRewardLevels?.length:
        return currentLevel;
      default:
        return currentLevel + 1;
    }
  };

  const getMyMembership = useCallback(() => {
    dispatch(getMyMembershipAction.request({}));
  }, [dispatch]);

  const renderListRewards = (data: React.ReactNode[]): React.ReactElement => {
    return (
      <div className="Member-list-wrapper">
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="Member-list-item flex items-start">
            <div className="Member-list-item-icon">
              <img src={ImageCrown} alt="" />
            </div>
            <div className="Member-list-item-label">{item}</div>
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

  const getProfile = useCallback(() => {
    dispatch(getProfileAction.request({}));
  }, [dispatch]);

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
    <div className="Member">
      <div className="container">
        <div className="Member-wrapper">
          <Row gutter={[40, 40]}>
            <Col span={24} lg={{ span: 8 }}>
              <MemberCard nextLevel={nextLevel} onClickLevelUpBtn={handleClickLeveUpBtn} />

              {nextLevel && (
                <div className="Member-level-up">
                  <div className="Member-level-up-title">Phí thăng hạng thành viên {nextLevel.name}</div>
                  <div className="Member-level-up-price">
                    {nextLevel.bcoin}
                    <small>BCoin</small>
                  </div>
                  <div className="Member-level-up-btn">
                    <Button title="Thăng hạng ngay" onClick={handleClickLeveUpBtn} />
                  </div>
                </div>
              )}
            </Col>
            <Col span={24} lg={{ span: 16 }}>
              {!getMembershipListLoading && (
                <div className="Member-body">
                  <Collapse
                    defaultActiveKey={[renderDefaultActiveKey()]}
                    expandIcon={({ isActive }): React.ReactNode => (
                      <div style={{ transform: `rotate(${isActive ? 90 : 0}deg)` }}>
                        <Icon name={EIconName.AngleRight} />
                      </div>
                    )}
                    expandIconPosition="right"
                  >
                    {dataRewardLevels?.map((item) => (
                      <Panel
                        key={item.key}
                        header={
                          <div className="Member-list-item-title flex items-center justify-between">
                            {item.title}
                            {item.remain && <span>{item.remain}</span>}
                          </div>
                        }
                      >
                        {item.description}
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>

      <ModalConfirm
        title="Xác nhận thanh toán"
        {...levelUpRankModalState}
        text={
          <>
            <strong>Thành viên {levelUpRankModalState.data?.name}</strong>
            <span>
              <big>{levelUpRankModalState.data?.bcoin}</big>
              <small>Bcoin</small>
            </span>
          </>
        }
        onClose={handleCloseLevelUpRankModal}
        onSubmit={handleSubmitLevelUpRankModal}
        loading={updradeMyMembershipLoading}
      />
    </div>
  );
};

export default Member;
