/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import BookQuestionForm from '@/pages/BookReader/TabQuestion/BookQuestionForm';
import { TGetProductQuestionsParams, TProductQuestion } from '@/services/api';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getProductQuestionsAction } from '@/redux/actions';
import { formatISODateToDateTime, getTotalPage } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import Empty from '@/components/Empty';
import WrapperLazyLoad from '@/components/WrapperLazyLoad';
import { EFormat } from '@/common/enums';

import { TTabQuestionProps } from './TabQuestion.types';
import './TabQuestion.scss';

const TabQuestion: React.FC<TTabQuestionProps> = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [visibleBookQuestionFormModal, setVisibleBookQuestionFormModal] = useState<boolean>(false);

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const isBoughtBook = productState?.is_buy;

  const [questionsProduct, setQuestionsProduct] = useState<TProductQuestion[]>([]);
  const getProductQuestionsTotal = useSelector(
    (state: TRootState) => state.productReducer.getProductQuestionsResponse?.data?.total,
  );
  const [getProductQuestionsParamsRequest, setGetProductQuestionsParamsRequest] = useState<TGetProductQuestionsParams>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const isEmpty = questionsProduct.length === 0;

  const handleOpenBookQuestionFormModal = (): void => {
    setVisibleBookQuestionFormModal(true);
  };

  const handleCloseBookQuestionFormModal = (): void => {
    setVisibleBookQuestionFormModal(false);
  };

  const handleLoadmoreProductQuestions = (): void => {
    const isLoadMore =
      getProductQuestionsParamsRequest.page <
      getTotalPage(getProductQuestionsTotal || 0, getProductQuestionsParamsRequest.pageSize);
    if (isLoadMore) {
      setGetProductQuestionsParamsRequest({
        ...getProductQuestionsParamsRequest,
        page: getProductQuestionsParamsRequest.page + 1,
      });
    }
  };

  const handleSubmitBookQuestionFormModal = (): void => {
    setGetProductQuestionsParamsRequest({
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
    });
  };

  const getProductQuestions = useCallback(() => {
    if (isBoughtBook) {
      dispatch(
        getProductQuestionsAction.request(
          { paths: { id }, params: getProductQuestionsParamsRequest },
          (response): void => {
            const isFirstFetching = getProductQuestionsParamsRequest.page === DEFAULT_PAGE;
            const data = response.data.records;
            setQuestionsProduct(isFirstFetching ? data : [...questionsProduct, ...data]);
          },
        ),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch, getProductQuestionsParamsRequest, isBoughtBook]);

  useEffect(() => {
    getProductQuestions();
  }, [getProductQuestions]);

  return (
    <div className="TabQuestion">
      {isEmpty ? (
        <Empty title="Không có dữ liệu câu hỏi" />
      ) : (
        <div className="TabQuestion-list">
          <WrapperLazyLoad maxHeight={400} onEnd={handleLoadmoreProductQuestions}>
            {questionsProduct.map((item) => (
              <div key={item._id} className="TabQuestion-list-item flex flex-wrap">
                <div className="TabQuestion-list-item-avatar">
                  <Avatar />
                </div>
                <div className="TabQuestion-list-item-info">
                  <div className="TabQuestion-list-item-info-title flex items-center">
                    {item.name}
                    <div className="TabQuestion-list-item-info-date">
                      {formatISODateToDateTime(item.createdAt, EFormat.DATE)}
                    </div>
                  </div>
                  <div className="TabQuestion-list-item-info-description">{item.question}</div>
                </div>

                {/* <div className="TabQuestion-list-item-reply flex items-start">
                  <div className="TabQuestion-list-item-info-title flex items-center">Admin: </div>
                  <div className="TabQuestion-list-item-info-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus mauris fringilla nunc vulputate.
                  </div>
                </div> */}
              </div>
            ))}
          </WrapperLazyLoad>
        </div>
      )}

      <div className="TabChapter-btn">
        <Button title="Gửi câu hỏi" onClick={handleOpenBookQuestionFormModal} disabled={!isBoughtBook} />
      </div>

      <BookQuestionForm
        visible={visibleBookQuestionFormModal}
        onClose={handleCloseBookQuestionFormModal}
        onSubmit={handleSubmitBookQuestionFormModal}
      />
    </div>
  );
};

export default TabQuestion;
