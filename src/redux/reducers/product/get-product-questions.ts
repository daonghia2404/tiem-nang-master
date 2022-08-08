import { TProductState } from '@/redux/reducers/product';
import { TGetProductQuestionsSuccess } from '@/redux/actions/product';

export const getProductQuestionsUpdateState = (
  state: TProductState,
  action: TGetProductQuestionsSuccess,
): TProductState => ({
  ...state,
  getProductQuestionsResponse: action.payload.response,
});
