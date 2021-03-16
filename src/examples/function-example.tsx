/* eslint-disable max-len */
import React from 'react';

import { Card } from '../components/Card';
import { Header } from '../components/Header';

const HeaderDemo = (): JSX.Element => {
  const headerTitle = 'Header Component';
  const cardTitle = 'Card';
  const cardDesc = `Pretium molestie ultricies neque phasellus proin nam lectus lacinia hac varius dictum convallis dui laoreet`;
  return (
    <div>
      <Header title={headerTitle} />
      <Card title={cardTitle} description={cardDesc} />
    </div>
  );
};

<HeaderDemo />;
