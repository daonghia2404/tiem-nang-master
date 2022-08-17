/* eslint-disable no-underscore-dangle */
import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import IconPdf from '@/assets/icons/icon-pdf.svg';
// import IconDownload from '@/assets/icons/icon-download.svg';
import { TRootState } from '@/redux/reducers';
import { formatISODateToDateTime } from '@/utils/functions';
import { EFormat } from '@/common/enums';

import { TTabDocumentProps } from './TabDocument.types';
import './TabDocument.scss';

const TabDocument: React.FC<TTabDocumentProps> = ({ source, onClickDocument, onBuyBook }) => {
  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;
  const isBoughtBook = productState?.is_buy;

  // const handleDownloadFile = (data: TProductFile): void => {
  //   dispatch(
  //     downloadProductFileAction.request({ paths: { pid: id, fid: data._id } }, (response): void =>
  //       handleDownloadSuccess(response, data.name),
  //     ),
  //   );
  // };

  // const handleDownloadSuccess = (data: Blob | File, name: string): void => {
  //   downloadFile(data, name);
  // };

  return (
    <div className="TabDocument">
      <div className="TabDocument-list">
        {bookData?.file?.map((item, index) => {
          const isEnable = index === 0 || isBoughtBook;

          return (
            <div
              key={item._id}
              className={classNames('TabDocument-list-item flex', {
                active: item._id === source?._id,
                disabled: !isEnable,
              })}
              onClick={(): void => {
                if (isEnable) onClickDocument?.(item);
                else onBuyBook?.();
              }}
            >
              <div className="TabDocument-list-item-icon">
                <img src={IconPdf} alt="" />
              </div>
              <div className="TabDocument-list-item-info">
                <div className="TabDocument-list-item-info-title">{item.name}</div>
                <div className="TabDocument-list-item-info-description">
                  {formatISODateToDateTime(item.updatedAt, EFormat.DATE)}
                </div>
                {/* <div
                className="TabDocument-list-item-info-download flex items-center"
                onClick={(): void => handleDownloadFile(item)}
              >
                <img src={IconDownload} alt="" />
                Tải xuống
              </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabDocument;
