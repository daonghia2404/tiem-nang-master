import { TProductState } from '@/redux/reducers/product';
import { TDownloadProductFileSuccess } from '@/redux/actions/product';

export const downloadProductFileUpdateState = (
  state: TProductState,
  action: TDownloadProductFileSuccess,
): TProductState => ({
  ...state,
  downloadProductFileResponse: action.payload.response,
});
