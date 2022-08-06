import { createReducer } from 'deox';

import { TGetCategoryListResponse } from '@/services/api/category';
import { getCategoryListAction } from '@/redux/actions';
import { getCategoryListUpdateState } from './get-category-list';

export type TCategoryState = {
  getCategoryListResponse?: TGetCategoryListResponse;
};

const initialState: TCategoryState = {
  getCategoryListResponse: undefined,
};

const CategoryReducer = createReducer(initialState, (handleAction) => [
  handleAction(getCategoryListAction.success, getCategoryListUpdateState),
]);

export default CategoryReducer;
