import { TProductState } from '@/redux/reducers/product';
import { TUnsaveProductSuccess } from '@/redux/actions/product';

export const unsaveProductUpdateState = (state: TProductState, action: TUnsaveProductSuccess): TProductState => ({
  ...state,
  unsaveProductResponse: action.payload.response,
});
