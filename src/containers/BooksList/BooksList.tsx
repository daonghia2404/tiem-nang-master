/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import BookBlock from '@/components/BookBlock';
import Pagination from '@/components/Pagination';
import Carousels from '@/components/Carousels';
import { TProduct } from '@/common/models';
import { Paths } from '@/pages/routers';
import Empty from '@/components/Empty';

import { TBooksListProps } from './BooksList.types.d';
import './BooksList.scss';

const BooksList: React.FC<TBooksListProps> = ({
  ids = [],
  data = [],
  dataFilter,
  title,
  useCarousel,
  emptyTitle,
  page = 0,
  pageSize = 0,
  total = 0,
  onPaginateChange,
  onClickFilter,
}) => {
  const isEmpty = data && data.length === 0;
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleClickBookBlock = (dataBook: TProduct): void => {
    if (!isDragging) {
      if (dataBook.slug && dataBook._id) {
        navigate(Paths.BookDetail(dataBook.slug, dataBook._id));
      }
    }
  };

  return (
    <div className="BooksList">
      <div className="container">
        <div className="BooksList-wrapper">
          {title ? (
            <div className="BooksList-title">{title}</div>
          ) : (
            <div className="BooksList-filters">
              <Row gutter={20} wrap={false}>
                {dataFilter?.map((item) => (
                  <Col key={item._id}>
                    <div
                      className={classNames('BooksList-filters-item', { active: ids.includes(item._id) })}
                      onClick={(): void => onClickFilter?.(item)}
                    >
                      {item.name}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {isEmpty ? (
            <Empty title={emptyTitle} />
          ) : (
            <>
              {useCarousel ? (
                <div className="BooksList-carousel">
                  <Carousels
                    arrows={false}
                    dots={false}
                    infinite={false}
                    slidesToShow={data.length < 5 ? data.length : 5}
                    slidesPerRow={1}
                    slidesToScroll={5}
                    onDragging={setIsDragging}
                    responsive={[
                      {
                        breakpoint: 991,
                        settings: {
                          slidesToShow: data.length < 4 ? data.length : 4,
                          slidesToScroll: 4,
                        },
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: data.length < 3 ? data.length : 3,
                          slidesToScroll: 3,
                        },
                      },
                      {
                        breakpoint: 575,
                        settings: {
                          slidesToShow: data.length < 2 ? data.length : 2,
                          slidesToScroll: 2,
                        },
                      },
                    ]}
                  >
                    {data.map((item) => (
                      <div className="BooksList-carousel-item" key={item._id}>
                        <BookBlock {...item} onClick={(): void => handleClickBookBlock(item)} />
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
                        <BookBlock {...item} onClick={(): void => handleClickBookBlock(item)} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </>
          )}

          {!useCarousel && (
            <div className="BooksList-pagination flex justify-end">
              <Pagination page={page} pageSize={pageSize} total={total} onChange={onPaginateChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksList;
