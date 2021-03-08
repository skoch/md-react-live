import React from 'react';
import { Header } from '../components/Header';

class HeaderDemo extends React.Component {
  private title = 'Class Example';

  render() {
    return <Header title={this.title} />;
  }
}

<HeaderDemo />;
