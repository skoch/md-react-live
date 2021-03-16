# Usage

No matter the format of the examples we must have a React element to render at the end of the examples. During the transplilation, we will be injecting a "return" statement which is necessary for `react-live` to render properly.

First we need to read this file and put the contents of the example files in the place of the linked files. Then we will use the resulting data as markdown to render.

## A Simple Example

The most basic of examples; the one that just has the component itself.

```jsx
/* eslint-disable max-len */
import React from 'react';

import { Header } from '../components/Header';
import { Card } from '../components/Card';

<div>
  <Header title="Header Component" />
  <Card
    title="FPO Card"
    description="Pretium molestie ultricies neque phasellus proin nam lectus lacinia hac varius dictum convallis dui laoreet"
  />
</div>;

```

## A Function Example

Still quite basic; a function.

```jsx
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

```

## Class Example

Different flavor; class / React Component

```jsx
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

```
