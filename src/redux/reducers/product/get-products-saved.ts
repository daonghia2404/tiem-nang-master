import { TProductState } from '@/redux/reducers/product';
import { TGetProductsSavedSuccess } from '@/redux/actions/product';

export const getProductsSavedUpdateState = (state: TProductState, action: TGetProductsSavedSuccess): TProductState => ({
  ...state,
  getProductsSavedResponse: action.payload.response,
});
