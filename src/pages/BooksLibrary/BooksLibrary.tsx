import React from 'react';

import Banner from '@/components/Banner';
import CategoriesEmotion from '@/containers/CategoriesEmotion';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import BooksList from '@/containers/BooksList';
import { dataCategoriesBooksLibrary } from '@/containers/CategoriesEmotion/CategoriesEmotion.data';
import { dataBooksList } from '@/containers/BooksList/BooksList.data';

const BooksLibrary: React.FC = () => {
  return (
    <div className="BooksLibrary">
      <Banner image={ImageBanner1} />
      <CategoriesEmotion data={dataCategoriesBooksLibrary} />
      <BooksList data={dataBooksList} emptyTitle="Lưa chọn 3 danh mục để tìm kiếm" />
    </div>
  );
};

export default BooksLibrary;
