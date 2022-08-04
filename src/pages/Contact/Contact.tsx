import React from 'react';

import Banner from '@/components/Banner';
import ImageContactBanner from '@/assets/images/image-banner-2.png';
import ContactForm from '@/containers/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <Banner image={ImageContactBanner} />
      <ContactForm />
    </div>
  );
};

export default Contact;
