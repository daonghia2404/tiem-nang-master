import { TProductState } from '@/redux/reducers/product';
import { TRateProductSuccess } from '@/redux/actions/product';

export const rateProductUpdateState = (state: TProductState, action: TRateProductSuccess): TProductState => ({
  ...state,
  rateProductResponse: action.payload.response,
});
