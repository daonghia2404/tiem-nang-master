import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import { Paths } from '@/pages/routers';

import { TBookBlockProps } from './BookBlock.types.d';
import './BookBlock.scss';

const BookBlock: React.FC<TBookBlockProps> = ({ image, title, isQuoteBook, link }) => {
  const handleNavigate = (): void => {
    navigate(link || Paths.BookDetail('1'));
  };

  return (
    <div className={classNames('BookBlock', { 'quote-book': isQuoteBook })} onClick={handleNavigate}>
      <div className="BookBlock-image">
        <img src={image} alt="" />
      </div>
      {title && <div className="BookBlock-title">{title}</div>}
    </div>
  );
};

export default BookBlock;
