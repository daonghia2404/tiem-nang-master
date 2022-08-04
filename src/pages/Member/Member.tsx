import React, { useState } from 'react';
import { Col, Collapse, Row } from 'antd';

import MemberCard from '@/pages/Member/MemberCard';
import Icon, { EIconName } from '@/components/Icon';
import ImageCrown from '@/assets/images/image-crown.svg';
import ModalConfirm from '@/containers/ModalConfirm';

import './Member.scss';
import Button from '@/components/Button';

const { Panel } = Collapse;

const Member: React.FC = () => {
  const [visibleLevelUpRankModal, setVisibleLevelUpRankModal] = useState<boolean>(false);

  const handleOpenLevelUpRankModal = (): void => {
    setVisibleLevelUpRankModal(true);
  };

  const handleCloseLevelUpRankModal = (): void => {
    setVisibleLevelUpRankModal(false);
  };

  const handleSubmitLevelUpRankModal = (): void => {
    handleCloseLevelUpRankModal();
  };

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

        <div className="Member-list-level-up-btn">
          <Button title="Thăng hạng ngay (99 Bcoin)" onClick={handleOpenLevelUpRankModal} />
        </div>
      </div>
    );
  };

  const dataRewardLevels = [
    {
      key: 1,
      title: 'Danh hiệu Tập đọc',
      remain: '(còn lại: 2 cuốn sách tự chọn)',
      description: renderListRewards([
        <>
          Thăng bậc <strong>TẬP ĐỌC</strong> sau khi hoàn tất 20 tâm sách!
        </>,
        'Nhận 50 Bcoin khi đạt được danh hiệu này',
        'Nhận thưởng 5 Bcoin vào Ví sau khi hoàn tất 1 tâm sách!',
      ]),
    },
    {
      key: 2,
      title: 'Danh hiệu Sách thủ',
      description: renderListRewards([
        <>
          Thăng bậc <strong>TẬP ĐỌC</strong> sau khi hoàn tất 20 tâm sách!
        </>,
        'Nhận 50 Bcoin khi đạt được danh hiệu này',
        'Nhận thưởng 5 Bcoin vào Ví sau khi hoàn tất 1 tâm sách!',
      ]),
    },
    {
      key: 3,
      title: 'Danh hiệu Mọt sách',
      description: renderListRewards([
        <>
          Thăng bậc <strong>TẬP ĐỌC</strong> sau khi hoàn tất 20 tâm sách!
        </>,
        'Nhận 50 Bcoin khi đạt được danh hiệu này',
        'Nhận thưởng 5 Bcoin vào Ví sau khi hoàn tất 1 tâm sách!',
      ]),
    },
    {
      key: 4,
      title: 'Danh hiệu Thông thái',
      description: renderListRewards([
        <>
          Thăng bậc <strong>TẬP ĐỌC</strong> sau khi hoàn tất 20 tâm sách!
        </>,
        'Nhận 50 Bcoin khi đạt được danh hiệu này',
        'Nhận thưởng 5 Bcoin vào Ví sau khi hoàn tất 1 tâm sách!',
      ]),
    },
  ];

  return (
    <div className="Member">
      <div className="container">
        <div className="Member-wrapper">
          <Row gutter={40}>
            <Col span={8}>
              <MemberCard onClickLevelUpBtn={handleOpenLevelUpRankModal} />
            </Col>
            <Col span={16}>
              <div className="Member-body">
                <Collapse
                  defaultActiveKey={[1]}
                  expandIcon={({ isActive }): React.ReactNode => (
                    <div style={{ transform: `rotate(${isActive ? 90 : 0}deg)` }}>
                      <Icon name={EIconName.AngleRight} />
                    </div>
                  )}
                  expandIconPosition="right"
                >
                  {dataRewardLevels.map((item) => (
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
            </Col>
          </Row>
        </div>
      </div>

      <ModalConfirm
        title="Xác nhận thanh toán"
        visible={visibleLevelUpRankModal}
        text={
          <>
            <strong>Thành viên hạng Bạc</strong>
            <span>
              <big>120</big>
              <small>Bcoin</small>
            </span>
          </>
        }
        onClose={handleCloseLevelUpRankModal}
        onSubmit={handleSubmitLevelUpRankModal}
      />
    </div>
  );
};

export default Member;
