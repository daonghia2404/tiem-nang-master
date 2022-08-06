import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';

import { getProductsByCategoriesAction } from '@/redux/actions';
import { getProductsByCategories, TGetProductsByCategoriesResponse } from '@/services/api';

// FUNCTION

export function* getProductsByCategoriesSaga(
  action: ActionType<typeof getProductsByCategoriesAction.request>,
): Generator {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(getProductsByCategories, materials);
    const getProductsByCategoriesResponse: TGetProductsByCategoriesResponse =
      response as TGetProductsByCategoriesResponse;
    yield put(getProductsByCategoriesAction.success(getProductsByCategoriesResponse));
    successCallback?.(getProductsByCategoriesResponse);
  } catch (err) {
    yield put(getProductsByCategoriesAction.failure(err));
    failedCallback?.(err);
  }
}
