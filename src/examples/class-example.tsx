/* eslint-disable max-len */
import React from 'react';

import { Header } from '../components/Header';
import { Card } from '../components/Card';

class HeaderDemo extends React.Component {
  private headerTitle = 'Header Component';

  private cardTitle = 'Header Component';

  private cardDesc = `Pretium molestie ultricies neque phasellus proin nam lectus lacinia hac varius dictum convallis dui laoreet`;

  render() {
    return (
      <div>
        <Header title={this.headerTitle} />
        <Card title={this.cardTitle} description={this.cardDesc} />
      </div>
    );
  }
}

<HeaderDemo />;
