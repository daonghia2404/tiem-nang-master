import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProductQuestionsAction } from '@/redux/actions';
import { getProductQuestions, TGetProductQuestionsResponse } from '@/services/api';

// FUNCTION

export function* getProductQuestionsSaga(action: ActionType<typeof getProductQuestionsAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProductQuestions, materials);
    const getProductQuestionsResponse: TGetProductQuestionsResponse = response as TGetProductQuestionsResponse;
    yield put(getProductQuestionsAction.success(getProductQuestionsResponse));
    successCallback?.(getProductQuestionsResponse);
  } catch (err) {
    yield put(getProductQuestionsAction.failure(err));
    failedCallback?.(err);
  }
}
