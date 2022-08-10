import React from 'react';
import classNames from 'classnames';

import { TBookBlockProps } from './BookBlock.types.d';
import './BookBlock.scss';

const BookBlock: React.FC<TBookBlockProps> = ({ images, image, pathImage, name, isQuoteBook, onClick }) => {
  return (
    <div className={classNames('BookBlock', { 'quote-book': isQuoteBook })} onClick={onClick}>
      <div className="BookBlock-image">
        <img src={images?.[0] || image || pathImage} alt="" />
      </div>
      {name && <div className="BookBlock-title">{name}</div>}
    </div>
  );
};

export default BookBlock;
