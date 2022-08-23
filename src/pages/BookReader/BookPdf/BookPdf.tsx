/* eslint-disable react/no-danger */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useDispatch } from 'react-redux';

import { ETypeNotification } from '@/common/enums';
import { DEFAULT_PAGE } from '@/common/constants';
import { getFileAction } from '@/redux/actions';
import { TGetFileResponse } from '@/services/api';

import { TBookPdfProps } from './BookPdf.types';
import './BookPdf.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const BookPdf: React.FC<TBookPdfProps> = ({ source, fontSize }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState<string>();
  const [pageNumber, setPageNumber] = useState<{
    page: number;
    total: number;
  }>({
    page: DEFAULT_PAGE,
    total: 0,
  });

  const handleVerifyPassword = (cb, reason): void => {
    cb(source?.key);

    if (reason !== 1) {
      showNotification(ETypeNotification.ERROR, 'Bạn Không có quyền truy cập tâm sách này nà');
    }
  };

  const handleLoadPdfSuccess = (data): void => {
    const { numPages } = data._pdfInfo;

    setPageNumber({
      page: DEFAULT_PAGE,
      total: numPages,
    });
  };

  const getFilePdf = useCallback(async () => {
    if (source) {
      dispatch(getFileAction.request({ paths: { name: source.src } }, handleGetFileSuccess));
      // const fileBlob = await fileFetch.blob();
      // setFile(window.URL.createObjectURL(fileBlob));
    }
  }, [source, dispatch]);

  const handleGetFileSuccess = (response: TGetFileResponse): void => {
    setFile(response.data);
  };

  useEffect(() => {
    getFilePdf();
  }, [getFilePdf]);

  return (
    <div className="BookPdf">
      {false && (
        <Document file={file} onLoadSuccess={handleLoadPdfSuccess} onPassword={handleVerifyPassword}>
          <Page scale={2} pageNumber={pageNumber} width={700} />
        </Document>
      )}

      <div className="BookPdf-content" style={{ fontSize }} dangerouslySetInnerHTML={{ __html: file }} />
    </div>
  );
};

export default BookPdf;
