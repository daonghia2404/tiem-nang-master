import { TProductState } from '@/redux/reducers/product';
import { TBuyProductSuccess } from '@/redux/actions/product';

export const buyProductUpdateState = (state: TProductState, action: TBuyProductSuccess): TProductState => ({
  ...state,
  buyProductResponse: action.payload.response,
});
