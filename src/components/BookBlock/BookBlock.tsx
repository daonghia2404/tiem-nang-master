import React from 'react';
import classNames from 'classnames';

import { TBookBlockProps } from './BookBlock.types.d';
import './BookBlock.scss';

const BookBlock: React.FC<TBookBlockProps> = ({ image, name, isQuoteBook, onClick }) => {
  return (
    <div className={classNames('BookBlock', { 'quote-book': isQuoteBook })} onClick={onClick}>
      <div className="BookBlock-image">
        <img src={image} alt="" />
      </div>
      {name && <div className="BookBlock-title">{name}</div>}
    </div>
  );
};

export default BookBlock;
