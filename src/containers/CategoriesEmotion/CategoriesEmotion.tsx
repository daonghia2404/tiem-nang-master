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
  showLoadMore,
  onClickItem,
  onLoadMore,
}) => {
  const handleLoadMore = (): void => {
    if (!loading) onLoadMore?.();
  };

  return (
    <div className="CategoriesEmotion">
      <div className="container">
        <div className="CategoriesEmotion-wrapper">
          <div className="CategoriesEmotion-filters">
            {data.map((item, index) => (
              <div key={index} className="CategoriesEmotion-filters-item">
                <div className="CategoriesEmotion-filters-item-title">{item.title}</div>
                <div className="CategoriesEmotion-filters-item-list">
                  <Row gutter={[15, 12]} wrap={false}>
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
              </div>
            ))}
          </div>

          {showLoadMore && (
            <div className={classNames('CategoriesEmotion-loadmore', { disabled: loading })} onClick={handleLoadMore}>
              Xem thêm
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesEmotion;
