/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Col, Row } from 'antd';

import { TCategoriesEmotionProps } from './CategoriesEmotion.types.d';
import './CategoriesEmotion.scss';

const CategoriesEmotion: React.FC<TCategoriesEmotionProps> = ({ data = [] }) => {
  return (
    <div className="CategoriesEmotion">
      <div className="container">
        <div className="CategoriesEmotion-wrapper">
          <div className="CategoriesEmotion-filters">
            {data.map((item, index) => (
              <div key={index} className="CategoriesEmotion-filters-item">
                <div className="CategoriesEmotion-filters-item-title">{item.title}</div>
                <div className="CategoriesEmotion-filters-item-list">
                  <Row gutter={[15, 12]}>
                    {item.list.map((list, listIdx) => (
                      <Col key={listIdx}>
                        <div className="CategoriesEmotion-filters-item-list-item flex items-center">
                          <div className="CategoriesEmotion-filters-item-list-item-icon">
                            <img src={list.icon} alt="" />
                          </div>
                          <div className="CategoriesEmotion-filters-item-list-item-label">{list.label}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesEmotion;
