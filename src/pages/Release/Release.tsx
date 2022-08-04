import React from 'react';

import Banner from '@/components/Banner';
import CategoriesEmotion from '@/containers/CategoriesEmotion';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import { dataCategoriesEmotion } from '@/containers/CategoriesEmotion/CategoriesEmotion.data';
import BooksList from '@/containers/BooksList';
import { dataBooksQuoteList } from '@/containers/BooksList/BooksList.data';

const Release: React.FC = () => {
  return (
    <div className="Release">
      <Banner image={ImageBanner1} />
      <CategoriesEmotion data={dataCategoriesEmotion} />
      <BooksList useCarousel title="Danh ngôn" data={dataBooksQuoteList} />
      <BooksList useCarousel title="Tựa sách nên đọc" />
    </div>
  );
};

export default Release;
