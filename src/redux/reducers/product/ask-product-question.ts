import { TProductState } from '@/redux/reducers/product';
import { TAskProductQuestionSuccess } from '@/redux/actions/product';

export const askProductQuestionUpdateState = (
  state: TProductState,
  action: TAskProductQuestionSuccess,
): TProductState => ({
  ...state,
  askProductQuestionResponse: action.payload.response,
});
