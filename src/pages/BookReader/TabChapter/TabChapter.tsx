import React, { useState } from 'react';

import Icon, { EIconName } from '@/components/Icon';

import Button from '@/components/Button';
import BookRateForm from '@/containers/BookRate/BookRateForm';

import { TTabChapterProps } from './TabChapter.types';
import './TabChapter.scss';

const TabChapter: React.FC<TTabChapterProps> = () => {
  const [visibleBookRateFormModal, setVisibleBookRateFormModal] = useState<boolean>(false);

  const handleOpenBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(true);
  };

  const handleCloseBookRateFormModal = (): void => {
    setVisibleBookRateFormModal(false);
  };

  return (
    <div className="TabChapter">
      <div className="TabChapter-chapter">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="TabChapter-chapter-item flex items-center justify-between">
            <div className="TabChapter-chapter-item-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quis in eget et consectetur adipiscing
              elit. Faucibus quis in eget et consectetur in mi quis sit. Eu tortor dictum{' '}
            </div>
            <div className="TabChapter-chapter-item-icon">
              <Icon name={EIconName.Locker} />
            </div>
          </div>
        ))}
      </div>

      <div className="TabChapter-btn">
        <Button title="Viết cảm nhận" onClick={handleOpenBookRateFormModal} />
      </div>

      <BookRateForm visible={visibleBookRateFormModal} onClose={handleCloseBookRateFormModal} />
    </div>
  );
};

export default TabChapter;
