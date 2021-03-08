# Usage

No matter the format of the examples we must have a React element to render at the end of the examples. During the transplilation, we will be injecting a "return" statement which is necessary for `react-live` to render properly.

First we need to read this file and put the contents of the example files in the place of the linked files. Then we will use the resulting data as markdown to render.

## A Simple Example

The most basic of examples; the one that just has the component itself.

```jsx
import React from 'react';
import { Header } from '../components/Header';

<Header title="Simple Header" />;

```

## A Function Example

Still quite basic; a function.

```jsx
import React from 'react';
import { Header } from '../components/Header';

const HeaderDemo = (): JSX.Element => {
  const title = 'Function Example';
  return <Header title={title} />;
};

<HeaderDemo />;

```

## Class Example

Different flavor; class / React Component

```jsx
import React from 'react';
import { Header } from '../components/Header';

class HeaderDemo extends React.Component {
  private title = 'Class Example';

  render() {
    return <Header title={this.title} />;
  }
}

<HeaderDemo />;

```
