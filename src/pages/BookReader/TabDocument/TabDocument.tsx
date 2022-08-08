/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import IconPdf from '@/assets/icons/icon-pdf.svg';
import IconDownload from '@/assets/icons/icon-download.svg';
import { TRootState } from '@/redux/reducers';
import { TProductFile } from '@/common/models';
import { downloadProductFileAction } from '@/redux/actions';
import { downloadFile } from '@/utils/functions';

import { TTabDocumentProps } from './TabDocument.types';
import './TabDocument.scss';

const TabDocument: React.FC<TTabDocumentProps> = () => {
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDownloadFile = (data: TProductFile): void => {
    dispatch(
      downloadProductFileAction.request({ paths: { pid: id, fid: data._id } }, (response): void =>
        handleDownloadSuccess(response, data.name),
      ),
    );
  };

  const handleDownloadSuccess = (data: Blob | File, name: string): void => {
    downloadFile(data, name);
  };

  return (
    <div className="TabDocument">
      <div className="TabDocument-list">
        {bookData?.file?.map((item) => (
          <div key={item._id} className="TabDocument-list-item flex">
            <div className="TabDocument-list-item-icon">
              <img src={IconPdf} alt="" />
            </div>
            <div className="TabDocument-list-item-info">
              <div className="TabDocument-list-item-info-title">{item.name}</div>
              {/* <div className="TabDocument-list-item-info-description">120 kb</div> */}
              <div
                className="TabDocument-list-item-info-download flex items-center"
                onClick={(): void => handleDownloadFile(item)}
              >
                <img src={IconDownload} alt="" />
                Tải xuống
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabDocument;
