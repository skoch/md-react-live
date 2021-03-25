## Usage

No matter the format of the examples we must have a React element to render at the end of the examples. During the transplilation, we will be injecting a "return" statement which is necessary for `react-live` to render properly.

First, we need to read this markdown file and put the contents of the example files in place of the linked files. Then we will use the resulting markdown file to render the contents of the examples as a live code editor using `react-live`.

### A Simple Example

The most basic of examples; the one that just has the component itself.

```jsx
import React from 'react';

import { Header } from '../components/Header';

<Header title="Header Component" />;

```

### A Function Example

Still quite basic; a function.

```jsx
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

```

### Class Example

Different flavor; class / React Component

```jsx
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

```
