import React, { Component } from 'react';
import { Header } from '../Header';

class HeaderDemo extends Component {
  private headerTitle = 'Demo Header Component';

  render() {
    return <Header title={this.headerTitle} />;
  }
}

<HeaderDemo />;
