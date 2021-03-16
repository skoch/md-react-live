import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => (
  <main>
    <h1>Markdown walking</h1>
    <nav>
      <Link to="simple">Simple Example</Link>
      <Link to="complex">Complex Example</Link>
      <Link to="react-view">React View</Link>
    </nav>
  </main>
);
export default Home;
