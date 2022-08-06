import { TProductState } from '@/redux/reducers/product';
import { TGetFilterProductListSuccess } from '@/redux/actions/product';

export const getFilterProductListUpdateState = (
  state: TProductState,
  action: TGetFilterProductListSuccess,
): TProductState => ({
  ...state,
  getFilterProductListResponse: action.payload.response,
});
