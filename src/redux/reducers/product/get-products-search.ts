import { TProductState } from '@/redux/reducers/product';
import { TGetProductsSearchSuccess } from '@/redux/actions/product';

export const getProductsSearchUpdateState = (
  state: TProductState,
  action: TGetProductsSearchSuccess,
): TProductState => ({
  ...state,
  getProductsSearchResponse: action.payload.response,
});
