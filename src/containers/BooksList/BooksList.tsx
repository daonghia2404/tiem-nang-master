import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';

import BookBlock from '@/components/BookBlock';
import Pagination from '@/components/Pagination';
import ImageEmpty from '@/assets/images/image-empty.png';
import Carousels from '@/components/Carousels';

import { dataBooksListFilters } from './BooksList.data';
import { TBooksListProps } from './BooksList.types.d';
import './BooksList.scss';

const BooksList: React.FC<TBooksListProps> = ({ data = [], title, useCarousel, emptyTitle }) => {
  const isEmpty = data && data.length === 0;

  return (
    <div className="BooksList">
      <div className="container">
        <div className="BooksList-wrapper">
          {title ? (
            <div className="BooksList-title">{title}</div>
          ) : (
            <div className="BooksList-filters">
              <Row gutter={20}>
                {dataBooksListFilters.map((item, index) => (
                  <Col key={item.value}>
                    <div className={classNames('BooksList-filters-item', { active: index === 0 })}>{item.label}</div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {isEmpty ? (
            <div className="BooksList-empty">
              <img src={ImageEmpty} alt="" />
              {emptyTitle && <span>{emptyTitle}</span>}
            </div>
          ) : (
            <>
              {useCarousel ? (
                <div className="BooksList-carousel">
                  <Carousels infinite autoplay arrows={false} dots={false} slidesToShow={5} slidesPerRow={1}>
                    {data.map((item: any) => (
                      <div className="BooksList-carousel-item" key={item.id}>
                        <BookBlock {...item} />
                      </div>
                    ))}
                  </Carousels>
                </div>
              ) : (
                <div className="BooksList-list">
                  <Row gutter={[36, 48]}>
                    {data.map((item: any, index: number) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <Col key={index}>
                        <BookBlock {...item} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </>
          )}

          {!useCarousel && (
            <div className="BooksList-pagination flex justify-end">
              <Pagination page={1} pageSize={4} total={24} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksList;
