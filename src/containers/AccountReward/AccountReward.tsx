import React from 'react';
import { Collapse } from 'antd';

import BgAccountDropdown from '@/assets/images/bg-account-dropdown.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import ImageCrown from '@/assets/images/image-crown.svg';

import { TAccountRewardProps } from './AccountReward.types.d';
import './AccountReward.scss';

const { Panel } = Collapse;

const AccountReward: React.FC<TAccountRewardProps> = () => {
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

  const dataRewardLevels = [
    {
      key: 1,
      title: 'Danh hiệu Tập đọc',
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
    <div className="AccountReward">
      <div className="AccountReward-header">
        <div className="AccountReward-header-bg">
          <img src={BgAccountDropdown} alt="" />
        </div>
        <div className="AccountReward-header-info flex justify-between">
          <div className="AccountReward-header-info-item">
            <div className="AccountReward-header-info-item-subtitle">Danh hiệu</div>
            <div className="AccountReward-header-info-item-title">Tập đọc</div>
          </div>
          <div className="AccountReward-header-info-item">
            <div className="AccountReward-header-info-item-subtitle">Tên thành viên</div>
            <div className="AccountReward-header-info-item-name">nguyenduythanh</div>
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

      <div className="AccountReward-body">
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
            <Panel key={item.key} header={item.title}>
              {item.description}
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default AccountReward;
