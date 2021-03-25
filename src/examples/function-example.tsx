import React from 'react';

import { Card } from '../components/Card';
import { Header } from '../components/Header';

const DemoExample = (): JSX.Element => {
  const headerTitle = 'Header Component';
  const cardTitle = 'Card Component';
  const cardDesc = 'Pretium molestie ultricies neque phasellus proin';

  return (
    <div>
      <Header title={headerTitle} />
      <Card title={cardTitle} description={cardDesc} />
    </div>
  );
};

<DemoExample />;
