/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import ImageBook from '@/assets/images/emotion/icon-books.svg';

import { TCategoriesEmotionProps } from './CategoriesEmotion.types.d';
import './CategoriesEmotion.scss';

const CategoriesEmotion: React.FC<TCategoriesEmotionProps> = ({
  loading,
  ids = [],
  data = [],
  onClickItem,
  onLoadMore,
}) => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const element = e.currentTarget;
    const isScrollEnd = element.offsetWidth + Math.ceil(element.scrollLeft) >= element.scrollWidth;

    if (isScrollEnd && !loading) onLoadMore?.();
  };

  return (
    <div className="CategoriesEmotion">
      <div className="container">
        <div className="CategoriesEmotion-wrapper">
          <div className="CategoriesEmotion-filters" onScroll={handleScroll}>
            {data.map((item, index) => (
              <>
                <div className="CategoriesEmotion-filters-item-title">{item.title}</div>
                <div className="CategoriesEmotion-filters-item-list">
                  <Row gutter={[0, 12]} wrap={false}>
                    {item.list.map((list, listIdx) => (
                      <Col key={listIdx}>
                        <div
                          className={classNames('CategoriesEmotion-filters-item-list-item flex items-center', {
                            active: ids.includes(list._id),
                          })}
                          onClick={(): void => onClickItem?.(list, index)}
                        >
                          <div className="CategoriesEmotion-filters-item-list-item-icon">
                            <img src={list.iconPath || ImageBook} alt="" />
                          </div>
                          <div className="CategoriesEmotion-filters-item-list-item-label">{list.name}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesEmotion;
