/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => (
  <main>
    <nav>
      <h3>React Live with TypeScript</h3>
    </nav>
    <section>
      <h2>TypeScript Support</h2>
      <p>
        Using <code>react-live</code> to render TypeScript embedded in Markdown
        by first transpiling to JavaScript.
      </p>
    </section>
    <section>
      <h2>Simple Example</h2>
      <p>
        We pass in each component used to the <code>scope</code> of the{' '}
        <code>LiveProvider</code>.
      </p>
      <p>
        In our case, it's simply the <code>Header</code> and the{' '}
        <code>Card</code> components. Note that the examples here do not{' '}
        <code>import</code> anything.
      </p>
      <Link to="simple">
        <button type="button">Simple Example</button>
      </Link>
    </section>
    <section>
      <h2>Complex Example</h2>
      <p>
        The difference between this and the simple example is that we first use
        the below utility to "transform" the markdown to include the examples
        from external files.
      </p>
      <p>
        We also use a module resolver function that allows us to be more dynamic
        with the scope of the editor.
      </p>
      <Link to="complex">
        <button type="button">Complex Example</button>
      </Link>
    </section>
    <section>
      <h2>Generate Markdown</h2>
      <pre>
        <code>$ npm run generate-markdown</code>
      </pre>
      <p>
        Utility to generate final markdown that contains examples that can drive
        a live code editor using <code>react-live</code>.
      </p>
    </section>
  </main>
);

export default Home;
