import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { askProductQuestionAction } from '@/redux/actions';
import { askProductQuestion, TAskProductQuestionResponse } from '@/services/api';

// FUNCTION

export function* askProductQuestionSaga(action: ActionType<typeof askProductQuestionAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(askProductQuestion, materials);
    const askProductQuestionResponse: TAskProductQuestionResponse = response as TAskProductQuestionResponse;
    yield put(askProductQuestionAction.success(askProductQuestionResponse));
    successCallback?.(askProductQuestionResponse);
  } catch (err) {
    yield put(askProductQuestionAction.failure(err));
    failedCallback?.(err);
  }
}
