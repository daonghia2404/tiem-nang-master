import React from 'react';

import ImageIntroduction from '@/assets/images/image-introduction.png';

import { TIntroductionProps } from './Introduction.types.d';
import './Introduction.scss';

const Introduction: React.FC<TIntroductionProps> = () => {
  return (
    <div className="Introduction">
      <div className="container">
        <div className="Introduction-wrapper flex flex-wrap items-center">
          <div className="Introduction-wrapper-item">
            <div className="Introduction-image">
              <img src={ImageIntroduction} alt="" />
            </div>
          </div>
          <div className="Introduction-wrapper-item">
            <div className="Introduction-title">Tiềm năng master</div>
            <div className="Introduction-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
