import React from 'react';

import Favicon from '@/assets/images/favicon.png';
import BgAccountDropdown from '@/assets/images/bg-account-dropdown.png';
import Button from '@/components/Button';

import { TMemberCardProps } from './MemberCard.types.d';
import './MemberCard.scss';

const MemberCard: React.FC<TMemberCardProps> = ({ onClickLevelUpBtn }) => {
  return (
    <div className="MemberCard">
      <div className="MemberCard-bg">
        <img src={BgAccountDropdown} alt="" />
      </div>

      <div className="MemberCard-row flex items-center justify-between">
        <div className="MemberCard-row-item">
          <div className="MemberCard-logo">
            <img src={Favicon} alt="" />
          </div>
        </div>
        <div className="MemberCard-row-item">
          <div className="MemberCard-subtitle">Tên thành viên</div>
          <div className="MemberCard-name">nguyenduythanh</div>
        </div>
      </div>

      <div className="MemberCard-row flex items-center justify-between">
        <div className="MemberCard-row-item">
          <div className="MemberCard-title">Thành viên</div>
          <div className="MemberCard-rank">Hạng đồng</div>
        </div>
        <div className="MemberCard-row-item">
          <Button title="Thăng hạng" onClick={onClickLevelUpBtn} />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
