import { TProductState } from '@/redux/reducers/product';
import { TGetMyProductSuccess } from '@/redux/actions/product';

export const getMyProductUpdateState = (state: TProductState, action: TGetMyProductSuccess): TProductState => ({
  ...state,
  getMyProductResponse: action.payload.response,
});
