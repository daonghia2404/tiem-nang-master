import { TProductState } from '@/redux/reducers/product';
import { TSaveProductSuccess } from '@/redux/actions/product';

export const saveProductUpdateState = (state: TProductState, action: TSaveProductSuccess): TProductState => ({
  ...state,
  saveProductResponse: action.payload.response,
});
