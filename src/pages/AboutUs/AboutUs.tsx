import React from 'react';

import Banner from '@/components/Banner';
import ImageBanner1 from '@/assets/images/image-banner-1.png';
import Favicon from '@/assets/images/favicon.png';

import './AboutUs.scss';

const AboutUs: React.FC = () => {
  return (
    <div className="AboutUs">
      <Banner image={ImageBanner1} title="Về chúng tôi" />

      <div className="container">
        <div className="AboutUs-wrapper">
          <div className="AboutUs-image">
            <img src={Favicon} alt="" />
            <div className="AboutUs-title">Tiềm Năng Master</div>
            <div className="AboutUs-version">Version 0.0.1</div>
          </div>

          <div className="AboutUs-content style-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <div className="AboutUs-footer style-content">
            <p>
              Email: <a href="mailto: summary@admin.summary.com">Summary@admin.summary.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
