import React from 'react';

import IconPdf from '@/assets/icons/icon-pdf.svg';
import IconDownload from '@/assets/icons/icon-download.svg';

import { TTabDocumentProps } from './TabDocument.types';
import './TabDocument.scss';

const TabDocument: React.FC<TTabDocumentProps> = () => {
  return (
    <div className="TabDocument">
      <div className="TabDocument-list">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="TabDocument-list-item flex">
            <div className="TabDocument-list-item-icon">
              <img src={IconPdf} alt="" />
            </div>
            <div className="TabDocument-list-item-info">
              <div className="TabDocument-list-item-info-title">Lorem Ipsum is simply dummy text.pdf</div>
              <div className="TabDocument-list-item-info-description">120 kb</div>
              <div className="TabDocument-list-item-info-download flex items-center">
                <img src={IconDownload} alt="" />
                Tải xuống
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabDocument;
