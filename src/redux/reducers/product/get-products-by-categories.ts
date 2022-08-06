import { TProductState } from '@/redux/reducers/product';
import { TGetProductsByCategoriesSuccess } from '@/redux/actions/product';

export const getProductsByCategoriesUpdateState = (
  state: TProductState,
  action: TGetProductsByCategoriesSuccess,
): TProductState => ({
  ...state,
  getProductsByCategoriesResponse: action.payload.response,
});
