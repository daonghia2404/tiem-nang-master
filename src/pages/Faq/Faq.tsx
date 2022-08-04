import React from 'react';
import { Collapse } from 'antd';

import Banner from '@/components/Banner';
import ImageBanner1 from '@/assets/images/image-banner-1.png';

import './Faq.scss';
import Icon, { EIconName } from '@/components/Icon';

const { Panel } = Collapse;

const Faq: React.FC = () => {
  const dataFriendlyAnswerQuestions = [
    {
      key: 1,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: (
        <div className="style-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of{' '}
          </p>
        </div>
      ),
    },
    {
      key: 2,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: (
        <div className="style-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of{' '}
          </p>
        </div>
      ),
    },
    {
      key: 3,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: (
        <div className="style-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of{' '}
          </p>
        </div>
      ),
    },
    {
      key: 4,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: (
        <div className="style-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of{' '}
          </p>
        </div>
      ),
    },
    {
      key: 5,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: (
        <div className="style-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of{' '}
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="Faq">
      <Banner image={ImageBanner1} title="Câu hỏi thường gặp" />

      <div className="container">
        <div className="Faq-wrapper">
          <Collapse
            expandIcon={({ isActive }): React.ReactNode => (
              <div style={{ transform: `rotate(${isActive ? 180 : 0}deg)` }}>
                <Icon name={EIconName.CaretDown} />
              </div>
            )}
            expandIconPosition="right"
          >
            {dataFriendlyAnswerQuestions.map((item) => (
              <Panel key={item.key} header={item.title}>
                {item.description}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Faq;
