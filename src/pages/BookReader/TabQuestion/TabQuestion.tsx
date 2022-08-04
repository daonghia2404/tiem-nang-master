import React, { useState } from 'react';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import BookQuestionForm from '@/pages/BookReader/TabQuestion/BookQuestionForm';

import { TTabQuestionProps } from './TabQuestion.types';
import './TabQuestion.scss';

const TabQuestion: React.FC<TTabQuestionProps> = () => {
  const [visibleBookQuestionFormModal, setVisibleBookQuestionFormModal] = useState<boolean>(false);

  const handleOpenBookQuestionFormModal = (): void => {
    setVisibleBookQuestionFormModal(true);
  };

  const handleCloseBookQuestionFormModal = (): void => {
    setVisibleBookQuestionFormModal(false);
  };

  return (
    <div className="TabQuestion">
      <div className="TabQuestion-list">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="TabQuestion-list-item flex flex-wrap">
            <div className="TabQuestion-list-item-avatar">
              <Avatar />
            </div>
            <div className="TabQuestion-list-item-info">
              <div className="TabQuestion-list-item-info-title flex items-center">
                Luminer
                <div className="TabQuestion-list-item-info-date">10/10/2020</div>
              </div>
              <div className="TabQuestion-list-item-info-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus mauris fringilla nunc{' '}
              </div>
            </div>

            <div className="TabQuestion-list-item-reply flex items-start">
              <div className="TabQuestion-list-item-info-title flex items-center">Admin: </div>
              <div className="TabQuestion-list-item-info-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus mauris fringilla nunc vulputate.
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="TabChapter-btn">
        <Button title="Gửi câu hỏi" onClick={handleOpenBookQuestionFormModal} />
      </div>

      <BookQuestionForm visible={visibleBookQuestionFormModal} onClose={handleCloseBookQuestionFormModal} />
    </div>
  );
};

export default TabQuestion;
