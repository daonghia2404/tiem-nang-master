import React from 'react';
import { Col, Row } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TBackgroundFormProps } from './BackgroundForm.types.d';
import './BackgroundForm.scss';

const BackgroundForm: React.FC<TBackgroundFormProps> = ({ label, value, onChange, options }) => {
  return (
    <div className="BackgroundForm">
      {label && <div className="BackgroundForm-label">{label}</div>}
      <div className="BackgroundForm-wrapper">
        <Row gutter={[12, 16]}>
          {options.map((item) => (
            <Col key={item.value}>
              <div
                className="BackgroundForm-item"
                onClick={(): void => onChange?.(item)}
                style={{ background: `url(${item.value})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {value?.value === item.value && (
                  <div className="BackgroundForm-item-check">
                    <Icon name={EIconName.Check} color={EIconColor.GREEN_HAZE} />
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BackgroundForm;
