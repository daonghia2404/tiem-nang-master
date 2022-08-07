import { TProductState } from '@/redux/reducers/product';
import { TGetProductRateSuccess } from '@/redux/actions/product';

export const getProductRateUpdateState = (state: TProductState, action: TGetProductRateSuccess): TProductState => ({
  ...state,
  getProductRateResponse: action.payload.response,
});
