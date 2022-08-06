import { TCategoryState } from '@/redux/reducers/category';
import { TGetCategoryListSuccess } from '@/redux/actions/category';

export const getCategoryListUpdateState = (state: TCategoryState, action: TGetCategoryListSuccess): TCategoryState => ({
  ...state,
  getCategoryListResponse: action.payload.response,
});
