import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Simple from './components/Simple';
import Complex from './components/Complex';
import ReactViewExample from './components/ReactViewExample';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/react-view" component={ReactViewExample} exact />
        <Route path="/complex" component={Complex} exact />
        <Route path="/simple" component={Simple} exact />
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
