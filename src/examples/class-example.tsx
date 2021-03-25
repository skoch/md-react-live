import React from 'react';

import { Card } from '../components/Card';
import { Header } from '../components/Header';

class DemoExample extends React.Component {
  private headerTitle = 'Header Component';

  private cardTitle = 'Card Component';

  private cardDesc = 'Pretium molestie ultricies neque phasellus proin';

  render() {
    return (
      <div>
        <Header title={this.headerTitle} />
        <Card title={this.cardTitle} description={this.cardDesc} />
      </div>
    );
  }
}

<DemoExample />;
